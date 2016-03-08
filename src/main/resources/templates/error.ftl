<!DOCTYPE html>
<html>
<head>
<body>
<div class="container">
    <H2>
        错误：${exception.className}</H2>
    <hr/>
    <P>
        <strong>错误描述：</strong>${exception.message}
    </P>

    <P>
        <strong>详细信息：</strong>
    </P>
       <pre>
       ${exception.stackTrace}
       </pre>
</div>
</body>
</html>