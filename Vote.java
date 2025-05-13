package vote;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vote {
    @Id @GeneratedValue
    private Long id;
    @ManyToOne
    private User voter;
    @ManyToOne
    private Candidate candidate;
    @ManyToOne
    private Election election;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getVoter() {
		return voter;
	}
	public void setVoter(User voter) {
		this.voter = voter;
	}
	public Candidate getCandidate() {
		return candidate;
	}
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	public Election getElection() {
		return election;
	}
	public void setElection(Election election) {
		this.election = election;
	}
}