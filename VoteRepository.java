package vote;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByVoterAndElection(User voter, Election election);
    List<Vote> findByElectionId(Long electionId);
}
