package vote;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/elections")
public class ElectionController {
    private final ElectionRepository repo;

    public ElectionController(ElectionRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Election create(@RequestBody Election e) {
        return repo.save(e);
    }

    @GetMapping
    public List<Election> list() {
        return repo.findAll();
    }

    @PutMapping("/{id}")
    public Election update(@PathVariable Long id, @RequestBody Election e) {
        e.setId(id);
        return repo.save(e);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}