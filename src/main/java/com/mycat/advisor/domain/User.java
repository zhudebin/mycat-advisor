package com.mycat.advisor.domain;

import lombok.Data;
import java.util.Date;

/**
 * @Author lgs
 * @Date 15-7-13 下午3:32
 */
@Data
public class User {

    private String id;

    private String name;

    private Date brithday;

    private String email;

}
