package com.skillstorm.taxprepsystembackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http
        .csrf().disable()
        .authorizeRequests(authorizeRequests -> {
            authorizeRequests.mvcMatchers(HttpMethod.POST, "/users/register").permitAll();

            authorizeRequests.mvcMatchers(HttpMethod.GET, "/users/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.POST, "/users/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.PUT, "/users/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.DELETE, "/users/**").authenticated();

            authorizeRequests.mvcMatchers(HttpMethod.GET, "/NECs/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.POST, "/NECs/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.PUT, "/NECs/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.DELETE, "/NECs/**").authenticated();

            authorizeRequests.mvcMatchers(HttpMethod.GET, "/W2s/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.POST, "/W2s/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.PUT, "/W2s/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.DELETE, "/W2s/**").authenticated();

            authorizeRequests.mvcMatchers(HttpMethod.GET, "/results/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.POST, "/results/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.PUT, "/results/**").authenticated();
            authorizeRequests.mvcMatchers(HttpMethod.DELETE, "/results/**").authenticated();
        })
        .httpBasic();

        return http.build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
    
}
