package org.apache.mycat.advisor.web.controller.um;

import java.util.Map;

import org.apache.mycat.advisor.common.controller.BaseController;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.common.controller.ResultMap;
import org.apache.mycat.advisor.persistence.model.TabUserLoginInfo;
import org.apache.mycat.advisor.service.um.userlogininfo.UserLoginInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by qyp on 2016/3/30.
 */
@RestController
@RequestMapping("/um/userLoginInfo/")
public class UserLoginInfoController extends BaseController {
    @Autowired
    UserLoginInfoService userLoginInfoService;


    @SuppressWarnings("rawtypes")
	@RequestMapping("list")

    public ResultMap list(@RequestParam Map<String, Object> param) {
        Page page = userLoginInfoService.page(param);
        return sucess(page);
    }


    @RequestMapping("init")
    public ResultMap init() {
        return success();
    }

    @RequestMapping("get/{id}")
    public ResultMap info(@PathVariable long id) {
        TabUserLoginInfo userLoginInfo = userLoginInfoService.get(id);
        return success(userLoginInfo);
    }

    @RequestMapping("del/{id}")
    public ResultMap del(@PathVariable long id) {
        if (userLoginInfoService.delete(id)) {
            return success();
        } else {
            return failure("删除操作失败！");
        }
    }


}
