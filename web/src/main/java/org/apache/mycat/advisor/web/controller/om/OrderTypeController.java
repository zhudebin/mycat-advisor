package org.apache.mycat.advisor.web.controller.om;

import java.util.Map;

import org.apache.mycat.advisor.common.controller.BaseController;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.common.controller.ResultMap;
import org.apache.mycat.advisor.persistence.model.DicOrderType;
import org.apache.mycat.advisor.service.om.type.OrderTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/om/type/")
public class OrderTypeController extends BaseController {
	
	@Autowired
	private OrderTypeService typeService;
	
	@RequestMapping("init")
	public ResultMap init(){
		return success();
	}
	
	@RequestMapping("save")
	public ResultMap save(DicOrderType type){
		if(typeService.save(type)){
			return success();
		}else{
			return failure("保存订单类型失败");
		}
	}
	
	@RequestMapping("list")
    public ResultMap list(@RequestParam Map<String, Object> param) {
		param.put("delFlag",0);
        Page<DicOrderType> page = typeService.page(param);
        return sucess(page);
    }
	
	@RequestMapping("get/{id}")
    public ResultMap info(@PathVariable long id) {
        DicOrderType type = typeService.get(id);
        return success(type);
    }

    @RequestMapping("del/{id}")
    public ResultMap del(@PathVariable long id) {
    	DicOrderType type = typeService.get(id);
    	type.setDelFlag(1);
        if (typeService.saveOrUpdate(type)) {
            return success();
        } else {
            return failure("删除操作失败！");
        }
    }

}
