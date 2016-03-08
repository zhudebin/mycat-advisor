package com.mycat.advisor.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.access.channel.SecureChannelProcessor;

import java.util.LinkedList;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(accountDetailsManager);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        List process = new LinkedList<>();
        process.add(new SecureChannelProcessor());
        http
                .httpBasic()
                .disable()
                .csrf()
                .disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/**").permitAll();
//                .anyRequest().authenticated()
//                .and().requiresChannel().channelProcessors(process);
//            .addFilterBefore(tokenAuthenticationFilter(), LogoutFilter.class)
//            .addFilterAfter(loginAuthenticationFilter(), TokenAuthenticationFilter.class);

//                .and()
//            .formLogin()
//                .usernameParameter("username")
//                .passwordParameter("password")
//                .successHandler(restAuthenticationSuccessHandler())
//                .failureHandler(restAuthenticationFailureHandler())
//                .loginProcessingUrl("/login")
//                .and()
//            .logout()
//                .logoutUrl("/logout");
//                .and()

//            .addFilterBefore(principalTokenAuthenticationFilter(), LogoutFilter.class).
//                .and()
//            .exceptionHandling()
//                .accessDeniedHandler(restAccessDeniedHandler())
//                .authenticationEntryPoint(restAuthenticationEntryPoint());
//                .and()

    }
}
