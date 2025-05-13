package vote;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {
    private final CandidateRepository candidateRepo;
    private final UserRepository userRepo;
    private final ElectionRepository electionRepo;

    // Explicit constructor injection
    public CandidateController(CandidateRepository candidateRepo,
                             UserRepository userRepo,
                             ElectionRepository electionRepo) {
        this.candidateRepo = candidateRepo;
        this.userRepo = userRepo;
        this.electionRepo = electionRepo;
    }

    @PostMapping
    public ResponseEntity<Candidate> createCandidate(
            @RequestBody Map<String, String> request,
            UriComponentsBuilder uriBuilder) {
        
        User user = userRepo.findById(Long.parseLong(request.get("userId")))
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        Election election = electionRepo.findById(Long.parseLong(request.get("electionId")))
                .orElseThrow(() -> new RuntimeException("Election not found"));
        
        Candidate candidate = new Candidate();
        candidate.setName(request.get("name"));
        candidate.setUser(user);
        candidate.setElection(election);
        
        Candidate savedCandidate = candidateRepo.save(candidate);
        
        URI location = uriBuilder.path("/api/candidates/{id}")
                .buildAndExpand(savedCandidate.getId())
                .toUri();
        
        return ResponseEntity.created(location).body(savedCandidate);
    }

    @GetMapping("/election/{electionId}")
    public ResponseEntity<List<Candidate>> getCandidatesByElection(
            @PathVariable Long electionId) {
        List<Candidate> candidates = candidateRepo.findByElectionId(electionId);
        return ResponseEntity.ok(candidates);
    }
}