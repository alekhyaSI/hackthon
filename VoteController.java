package vote;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/votes")
public class VoteController {
    private final VoteRepository voteRepo;
    private final UserRepository userRepo;
    private final CandidateRepository candidateRepo;
    private final ElectionRepository electionRepo;

    public VoteController(VoteRepository voteRepo,
                        UserRepository userRepo,
                        CandidateRepository candidateRepo,
                        ElectionRepository electionRepo) {
        this.voteRepo = voteRepo;
        this.userRepo = userRepo;
        this.candidateRepo = candidateRepo;
        this.electionRepo = electionRepo;
    }

    @PostMapping
    public ResponseEntity<?> castVote(@RequestBody Map<String, Long> request) {
        User voter = userRepo.findById(request.get("voterId"))
                .orElseThrow(() -> new RuntimeException("Voter not found"));
        Candidate candidate = candidateRepo.findById(request.get("candidateId"))
                .orElseThrow(() -> new RuntimeException("Candidate not found"));
        Election election = electionRepo.findById(request.get("electionId"))
                .orElseThrow(() -> new RuntimeException("Election not found"));

        if (voteRepo.findByVoterAndElection(voter, election).isPresent()) {
            return ResponseEntity.badRequest().body("Already voted");
        }

        Vote vote = new Vote();
        vote.setVoter(voter);
        vote.setCandidate(candidate);
        vote.setElection(election);

        return ResponseEntity.ok(voteRepo.save(vote));
    }

    @GetMapping("/results/{electionId}")
    public Map<String, Long> getResults(@PathVariable Long electionId) {
        return voteRepo.findByElectionId(electionId).stream()
                .collect(Collectors.groupingBy(
                        v -> v.getCandidate().getName(),
                        Collectors.counting()
                ));
    }
}