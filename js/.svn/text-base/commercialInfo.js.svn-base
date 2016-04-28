$(document).ready(function() {

    //get elements


    var oDownload = $(".download"); // 下载按钮
    var oPopwin = $(".popwin-wrapper"); //弹出框模块
    var oCorpNamre = $("#commercial-corp-name"); //工商详情公司名
    var oCapital = $("#reg-capital-content"); //注册资金
    var oRepresentative = $("#representative-content"); //法定代表
    var oCreateTime = $(".reg-create-time-content"); //成立日期
    var oState = $(".operating-state-content"); //经营状态
    var oCommercialCode = $("#commercial-code"); //工商号
    var oCredits = $("#reg-credit-code-content"); //社会信用代码
    var oOrgCode = $("#org-code"); //机构代码
    var oCorpType = $("#reg-corp-type-content"); //公司类型
    var oRang = $(".run-range-content"); //经营范围
    var oAddr = $("#addr-content"); //住所
    var oRunTimeBegin = $("#run-time-begin"); //经营起始时间
    var oRunTimeEnd = $("#run-time-end"); //经营结束时间
    var oReceiveTime = $("#receive-cer-time"); //发照时间
    var oRegOrg = $("#reg-org"); //登记机关
    var oShareholder = $("#shareholders"); //企业法人
    var oMember1 = $("#member-1"), //法人1
        oMember2 = $("#member-2"), //法人2
        oMember3 = $("#member-3"); //法人3

    var oJob1 = $("#job-1"), //职务1
        oJob2 = $("#job-2"), //职务2
        oJob3 = $("#job-3"); //职务3

    var oBranch1 = $("#branch-1"), //分支机构1
        oBranch2 = $("#branch-2"); //分支机构2


    oCapital.on("tap", function() {
        console.log(oCapital.html());
    });

 
    //AJAX－工商详情
    $.ajax({
        url: 'http://localhost:8081/corp_h5/corp_Detail.do?uuid=d8d14083ebfe4087aadb3a415e098358',
        type: 'GET',  
        async: false, 
        //默认为true 异步   
        error: function() {
            console.log('对不起，出错了～');
        },
        success: function(data) {
            console.log('ok!!!');
            //convert
            data = eval(data);

            //fill data

            //工商详情公司名
            oCorpNamre.html('');
            oCorpNamre.html(data.data.corp.corp_Name);

            //注册资金
            oCapital.html('');
            oCapital.html(data.data.corp.corp_RegistCapi);

            //法定代表
            oRepresentative.html('');
            oRepresentative.html(data.data.corp.corp_OperName);

            //成立日期
            oCreateTime.html('');
            oCreateTime.html(data.data.corp.corp_StartDate);

            //经营状态
            oState.html('');
            oState.html(data.data.corp.corp_Status);

            //工商号
            oCommercialCode.html('');
            oCommercialCode.html(data.data.corp.corp_RegNo);

            //机构代码
            oOrgCode.html('');
            oOrgCode.html(data.data.corp.corp_OrgNo);

            //社会信用代码
            oCredits.html('');
            oCredits.html(data.data.corp.corp_CreditCode);

            //公司类型
            oCorpType.html('');
            oCorpType.html(data.data.corp.corp_EconKind);

            //经营范围
            oRang.html('');
            oRang.html(data.data.corp.corp_Scope);

            //住所
            oAddr.html('');
            oAddr.html(data.data.corp.corp_Address);

            //开始时间
            oRunTimeBegin.html('');
            oRunTimeBegin.html(data.data.corp.corp_TermStart);

            //到期时间
            oRunTimeEnd.html('');
            oRunTimeEnd.html(data.data.corp.corp_TeamEnd);

            //发照时间
            oReceiveTime.html('');
            oReceiveTime.html(data.data.corp.corp_CheckDate);

            //登记机关
            oRegOrg.html('');
            oRegOrg.html(data.data.corp.corp_BelongOrg);

            //主要成员一
            oMember1.html('');
            oMember1.html(data.data.corp.corp_Employees[0].emp_Name);

            //主要成员一 主要职务
            // oJob1.html('');
            // oJob1.html(data.data.corp.corp_Employees[0].emp_Job);

            //test
            console.log(data);
            console.log(data.data.corp.corp_Scope);
        }
    });



    //Download button tap
    oDownload.on("tap", function() {
        window.location = "http://www.baidu.com/";
    });
});
