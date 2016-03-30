package org.apache.mycat.advisor.web;

import com.alibaba.fastjson.JSONArray;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by cjl on 2016/3/28.
 */
public class Test {


    public static void main(String args[]) {
        Map<String, Object> map = new HashMap<>();
        map.put("advisorId", "1");
        map.put("name","张三");
        map.put("title", "擅长性能优化");
        map.put("post", "java开发工程师");
        map.put("company", "深圳发展科技");
        map.put("socre", "0.93");
        System.out.println(JSONArray.toJSON(map));

    }
}
