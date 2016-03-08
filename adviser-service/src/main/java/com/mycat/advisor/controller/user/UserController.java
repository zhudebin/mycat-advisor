package com.mycat.advisor.controller.user;

import com.github.base.json.JsonResponse;
import com.mycat.advisor.domain.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @Author lgs
 * @Date 15-7-14 下午2:36
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @RequestMapping(method = RequestMethod.PUT)
    public JsonResponse update(@RequestBody User user) {

        return JsonResponse.success();
    }
    @RequestMapping(method = RequestMethod.POST)
    public JsonResponse create(@RequestBody @Valid User user) {

        return JsonResponse.success();
    }

/*

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public JsonResult delete(@PathVariable("id") String id) {
        userRepository.delete(id);
        return JsonResult.createSuccess();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public JsonResult get(@PathVariable("id") String id) {
        return JsonResult.createSuccessData(userRepository.findOne(id));
    }*/

}
