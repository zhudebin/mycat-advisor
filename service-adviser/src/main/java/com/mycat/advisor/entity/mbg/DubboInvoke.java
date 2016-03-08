package com.mycat.advisor.entity.mbg;

import java.util.Date;
import lombok.Data;

@Data
public class DubboInvoke {
    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String id;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Date invokeDate;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String service;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String method;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String consumer;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String provider;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private String type;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Long invokeTime;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer success;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer failure;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer elapsed;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer concurrent;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer maxElapsed;

    /**
     * This field corresponds to the database column dubbo_invoke.
     */
    private Integer maxConcurrent;
}