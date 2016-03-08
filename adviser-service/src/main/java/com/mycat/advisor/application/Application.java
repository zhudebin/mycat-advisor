package com.mycat.advisor.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

/**
 * @Author lgs
 * @Date 15-7-13 下午3:30
 *
 */
@SpringBootApplication
@ComponentScan("com.mycat.advisor")
@ImportResource("classpath:spring/applicationContext.xml")
public class Application {


    /**
     * 默认启动调用入口
     * @param args
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /*@Bean
    public ReloadableResourceBundleMessageSource messageSource(){
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages/messages");
        return messageSource;
    }*/
    /*@Bean
    public EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer() throws Exception {
        final String absoluteKeystoreFile = ResourceUtils.getFile("classpath:keystore.p12").getAbsolutePath();

        return new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer factory) {
                Assert.state(factory instanceof JettyEmbeddedServletContainerFactory, "Use Jetty for this server");
                JettyEmbeddedServletContainerFactory jettyFactory = (JettyEmbeddedServletContainerFactory) factory;
                jettyFactory.addServerCustomizers(new JettyServerCustomizer() {

                    @Override
                    public void customize(Server server) {
                        SslContextFactory sslContextFactory = new SslContextFactory();
                        sslContextFactory.setKeyStorePath(absoluteKeystoreFile);
                        sslContextFactory.setKeyStorePassword("123456");
                        sslContextFactory.setKeyStoreType("PKCS12");

                        ServerConnector sslConnector = new ServerConnector(	server, sslContextFactory);
                        sslConnector.setPort(8443);
                        ServerConnector connector = new ServerConnector(server);
                        connector.setPort(8080);
                        server.setConnectors(new Connector[] { sslConnector,connector });
                    }
                });
            }
        };
    }*/
}
