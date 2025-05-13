package vote;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtUtils {
    
    // Default values will be used if properties are not set
    @Value("${jwt.secret:votingsystemdefaultsecretkey12345678901234567890}")
    private String jwtSecret;
    
    @Value("${jwt.expiration:36000}") // Default: 10 hours (in seconds)
    private long expirationTime;
    
    // Generate signing key from the secret
    private SecretKey getSigningKey() {
        byte[] keyBytes = Base64.getEncoder().encode(jwtSecret.getBytes());
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Extract email (subject) from JWT token
    public String getEmailFromToken(String token) throws JwtException {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (MalformedJwtException ex) {
            throw new JwtException("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            throw new JwtException("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            throw new JwtException("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            throw new JwtException("JWT claims string is empty");
        }
    }

    // Generate JWT token for a user email
    public String generateToken(String email) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTime * 1000);
        
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    
    // Validate JWT token
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            // Invalid JWT signature
        } catch (MalformedJwtException ex) {
            // Invalid JWT token
        } catch (ExpiredJwtException ex) {
            // Expired JWT token
        } catch (UnsupportedJwtException ex) {
            // Unsupported JWT token
        } catch (IllegalArgumentException ex) {
            // JWT claims string is empty
        }
        return false;
    }

    // Get expiration time in milliseconds
    public long getExpirationInMillis() {
        return expirationTime * 1000;
    }
}