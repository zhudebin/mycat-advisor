package org.apache.mycat.advisor.service.base;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.persistence.util.MyMapper;

import java.lang.reflect.Field;
import java.util.Map;

/**
 * Created by cjl on 2016/3/18.
 */
public abstract class BaseServiceImpl<T> implements BaseService<T> {

    protected abstract MyMapper<T> myMapper();


    public Page<T> page(Map<String, Object> param) {
        int pageIndex = 0;
        int pageCount = 8;
        Object tmpIndex = param.get("pageIndex");
        Object tmpCount = param.get("pageCount");
        if (tmpIndex != null && StringUtils.isNotEmpty(tmpIndex.toString())) {
            pageIndex = Integer.parseInt(tmpIndex.toString());
        }
        if (tmpCount != null && StringUtils.isNotEmpty(tmpCount.toString())) {
            pageCount = Integer.parseInt(tmpCount.toString());
        }
        PageHelper.startPage(pageIndex+1, pageCount);
        PageInfo<T> pageInfo = new PageInfo<T>(myMapper().selectAll());
        return twoPage(pageInfo);
    }

    protected Page<T> twoPage(PageInfo<T> pageInfo) {
        return new Page<T>(pageInfo.getList(), pageInfo.getTotal(), pageInfo.getPageNum() - 1, pageInfo.getPageSize());
    }


    @Override
    public boolean saveOrUpdate(T o) {
        int i = 0;
        Class clas = o.getClass();
        Field field = null;
        try {
            field = clas.getDeclaredField("id");
        } catch (NoSuchFieldException e) {
            try {
                field = clas.getDeclaredField("ID");
            } catch (NoSuchFieldException e1) {
            }
        }
        Object id = null;
        if (field != null) {
            System.out.println(field.getName());
            try {
                field.setAccessible(true);
                id = field.get(o);
            } catch (IllegalAccessException e) {

            }
        }
        if (id != null) {
            i = myMapper().updateByPrimaryKey(o);
        } else {
            i = myMapper().insert(o);
        }
        return i > 0;
    }

    @Override
    public boolean delete(Long id) {
        return myMapper().deleteByPrimaryKey(id) > 0;
    }

    @Override
    public T get(long id) {
        return myMapper().selectByPrimaryKey(id);
    }

    @Override
    public boolean insert(T o) {
        int i = myMapper().insert(o);
        return i > 0;
    }

    @Override
    public boolean update(T o) {
        return myMapper().updateByPrimaryKey(o) > 0;
    }
}
