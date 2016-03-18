package org.apache.mycat.advisor.web.security;

import org.springframework.security.core.userdetails.UserCache;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.HashMap;

/**
 * Created by cjl on 2016/3/20.
 */
@Component
public class UserCacheImpl extends HashMap<String,UserDetails> implements UserCache{
    @Override
    public UserDetails getUserFromCache(String username) {


        return this.get(username);
    }

    @Override
    public void putUserInCache(UserDetails user) {

        this.put(user.getUsername(), user);

    }

    @Override
    public void removeUserFromCache(String username) {

        this.remove(username);
    }
}
