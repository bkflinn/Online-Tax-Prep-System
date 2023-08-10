package com.skillstorm.taxprepsystembackend.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.authorizeRequests(authorizeRequests -> {
            authorizeRequests.mvcMatchers("/users").authenticated();
        })
        .csrf((csrf) ->
            csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).ignoringAntMatchers("/users")
        )
        .cors(cors -> {
            cors.configurationSource(request -> {
                CorsConfiguration corsConfig = new CorsConfiguration();
                corsConfig.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
                corsConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                corsConfig.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                corsConfig.setAllowCredentials(true);
                corsConfig.setMaxAge(3600L);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", corsConfig);

                return corsConfig;
            });
        })
        .oauth2Login();

        return http.build();
    }
    
}
