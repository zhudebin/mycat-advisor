package org.apache.mycat.advisor.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * package: org.apache.mycat.advisor.desktop.passport <br/>
 * blog:<a href="http://dr-yanglong.github.io/">dr-yanglong.github.io</a><br/>
 * functional describe:登录控制器，提供基于JWT（json web token）方式的登录认证接口，常规web登录接口，ajax登录接口。
 *
 * @author DR.YangLong [410357434@163.com]
 * @version 1.0    2016/3/11
 */
@Controller
@RequestMapping("/")
public class IndexController {
    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

    @RequestMapping("")
    public String root() {
        return "redirect:index";
    }

    @RequestMapping("index")
    public String index(ModelAndView modelAndView) {


        return "index";
    }

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public ModelAndView getLoginPage(String error) {
        LOGGER.debug("Getting login page, error={}", error);
        if (error != null) {
            error = "登录失败，请检查用户名";
        }
        return new ModelAndView("login", "msg", error);
    }

    @RequestMapping("login/error")
    public ModelAndView error() {
        ModelAndView modelAndView = new ModelAndView("login");
        modelAndView.addObject("msg", "登录失败，请检查用户名");

        return modelAndView;
    }

    @RequestMapping("index/success")
    @ResponseBody
    public Map<String,String> success() {
        Map<String, String> data = new HashMap<>();
        data.put("flag", "true");
        data.put("msg", "登陆成功");
        return data;
    }



    @RequestMapping("doLogin")
    @ResponseBody
    public Map<String, String> login(@RequestParam Map<String, String> param) {

        String username = param.get("username");
        String password = param.get("password");
        param.put("flag", "true");
        System.out.println("username:" + username);

        return param;
    }
}
