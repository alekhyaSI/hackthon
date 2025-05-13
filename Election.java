package vote;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Election {
    @Id @GeneratedValue
    private Long id;
    private String title;
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	private String status; // OPEN or CLOSED

    // Business method that uses the fields
    public boolean isOpen() {
        return "OPEN".equals(status);
    }
    
    // Example of validation
    public void validate() {
        if (title == null || title.isBlank()) {
            throw new IllegalStateException("Election title cannot be empty");
        }
        if (!"OPEN".equals(status) && !"CLOSED".equals(status)) {
            throw new IllegalStateException("Status must be OPEN or CLOSED");
        }
    }
}