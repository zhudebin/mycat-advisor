package com.mycat.advisor.advice;

import com.github.base.exception.BizException;
import com.github.base.exception.Errors;
import com.github.base.json.JsonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice()
@Slf4j
public class ControllerExceptionHandler{

    @Autowired
    private MessageSource messageSource;


    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public JsonResponse exceptionHandler(MethodArgumentNotValidException ex) {
        log.info("request param validate exception", ex);
        return JsonResponse.fail(ex.getBindingResult().getAllErrors().get(0).getDefaultMessage());
    }
    @ExceptionHandler(BizException.class)
    @ResponseBody
    public JsonResponse bizExceptionHandle(BizException ex) {
        log.info("process BizException", ex);
        JsonResponse response = new JsonResponse();
        Errors error = ex.getErrors();
        response.setCode(error.getErrorCode());
        if (StringUtils.isEmpty(error.getMessage())){
            response.setMsg(ex.getMessage());
        }else {
            response.setMsg(error.getMessage());
        }

        return response;
    }
    /*@ExceptionHandler(Exception.class)
    protected ResponseEntity<Object> baseHandler(Exception ex, WebRequest request) {

        log.error("the layer of controller throw exception ", ex);
        *//*MediaType mediaType = headers.getContentType();
        if (mediaType == MediaType.APPLICATION_JSON){

        }*//*

        JsonResult resultDto = JsonResult.createFailMsg();
        return handleExceptionInternal(ex, resultDto,
                new HttpHeaders(), HttpStatus.OK, request);
    }
    @ExceptionHandler(BaseException.class)
    protected ResponseEntity<Object> baseExceptionHandler(Exception ex, WebRequest request) {

        log.error("the layer of controller throw exception ", ex);
        *//*MediaType mediaType = headers.getContentType();
        if (mediaType == MediaType.APPLICATION_JSON){

        }*//*

        JsonResult resultDto = JsonResult.createFailMsg();
        Errors errors = ((BaseException) ex).getErrors();
        String message = "";
        if (!StringUtils.isEmpty(errors.getErrorCode())){
            message = messageSource.getMessage(errors.getErrorCode(), errors.getArgs(), Locale.SIMPLIFIED_CHINESE);
        }else {
            message = errors.getMessage();
        }
        errors.setMessage(message);
        resultDto.setData(errors);

        return handleExceptionInternal(ex, resultDto,
                new HttpHeaders(), HttpStatus.OK, request);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public JsonResult exceptionHandler(MethodArgumentNotValidException ex) {
        logger.info("request param validate exception", ex);
        List<ObjectError> errors = ex.getBindingResult().getAllErrors();
        JsonResult response = JsonResult.createFailMsg(errors.get(0).getDefaultMessage());
        return response;
    }*/

}
