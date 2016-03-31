package org.apache.mycat.advisor.web.controller.om;

import java.util.Map;

import org.apache.mycat.advisor.common.controller.BaseController;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.common.controller.ResultMap;
import org.apache.mycat.advisor.persistence.model.DicOrderType;
import org.apache.mycat.advisor.persistence.model.TabOrder;
import org.apache.mycat.advisor.service.om.info.OrderInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/om/info/")
public class OrderInfoController extends BaseController {
	
	@Autowired
	private OrderInfoService orderService;
	
	@RequestMapping("init")
	public ResultMap init(){
		return success();
	}
	
	@RequestMapping("save")
	public ResultMap save(TabOrder order){
		if(orderService.saveOrUpdate(order)){
			return success();
		}else{
			return failure("保存订单失败");
		}
	}
	
	@RequestMapping("list")
    public ResultMap list(@RequestParam Map<String, Object> param) {
        Page<TabOrder> page = orderService.page(param);
        return sucess(page);
    }
	
	@RequestMapping("get/{id}")
    public ResultMap info(@PathVariable long id) {
		TabOrder order = orderService.get(id);
        return success(order);
    }

    @RequestMapping("del/{id}")
    public ResultMap del(@PathVariable long id) {
        if (orderService.delete(id)) {
            return success();
        } else {
            return failure("删除操作失败！");
        }
    }
}
