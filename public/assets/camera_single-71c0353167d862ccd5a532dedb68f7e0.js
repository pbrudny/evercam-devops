function handleScrollToEvents(){var e=document.location.toString();e.match("#")&&($(".nav-tabs a[href=#"+e.split("#")[1]+"]").tab("show"),setTimeout(function(){scrollTo(0,0)},10)),this.$(".nav-tabs").tabdrop("layout"),$(".nav-tabs a").on("shown.bs.tab",function(e){window.location.hash=e.target.hash,scrollTo(0,0)})}(function(){var e,t,a,n,r,i,o,s,c,d,l,u,h,p;h=function(e){return Notification.show(e),!0},p=function(e){return Notification.show(e),!0},u=function(e){var t,a;return a=$('meta[name="csrf-token"]'),a.size()>0&&(t={"X-CSRF-Token":a.attr("content")},e.headers=t),jQuery.ajax(e),!0},e=function(e){var t,a,n,d,l,u,h,p;return l=$("<tr>"),"share_request"===e.type?l.attr("share-request-id",e.share_id):l.attr("share-id",e.share_id),a=$("<td>",{"class":"col-lg-4"}),a.append(document.createTextNode(" "+e.email)),"share_request"===e.type&&(p=$("<small>",{"class":"blue"}),p.text(" ...pending"),a.append(p)),l.append(a),a=$("<td>",{"class":"col-lg-2"}),n=$("<div>",{"class":"input-group"}),u=$("<select>",{"class":"form-control reveal","show-class":"show-save"}),u.focus(o),d=$("<option>",{value:"minimal"}),"full"!==e.permissions&&d.attr("selected","selected"),d.text("Read Only"),u.append(d),d=$("<option>",{value:"full"}),"full"===e.permissions&&d.attr("selected","selected"),d.text("Full Rights"),u.append(d),n.append(u),a.append(n),l.append(a),a=$("<td>",{"class":"col-lg-2"}),t=$("<button>",{"class":"save show-save btn btn-primary"}),t.text("Save"),t.click("share"===e.type?s:c),a.append(t),l.append(a),a=$("<td>",{"class":"col-lg-2"}),n=$("<div>",{"class":"form-group"}),h=$("<span>"),h.append($("<span>",{"class":"glyphicon glyphicon-remove"})),"share"===e.type?(h.addClass("delete-share-control"),h.append($(document.createTextNode("Remove"))),h.click(r),h.attr("share_id",e.share_id)):(h.addClass("delete-share-request-control"),h.append($(document.createTextNode("Revoke"))),h.click(i),h.attr("email",e.email)),h.attr("camera_id",e.camera_id),n.append(h),a.append(n),l.append(a),l.hide(),$("#sharing_list_table tbody").append(l),l.find(".save").hide(),l.fadeIn(),!0},d=function(e){var t,a,n,r,i,o,s;switch(e.preventDefault(),o=$("input[name=sharingOptionRadios]:checked").val(),t=$("#set_permissions_submit"),a=$("#sharing_tab_camera_id").val(),n={},o){case"public_discoverable":n["public"]=!0,n.discoverable=!0,$(".show-on-public").show(),$(".show-on-private").hide();break;case"public_undiscoverable":n["public"]=!0,n.discoverable=!1,$(".show-on-public").show(),$(".show-on-private").hide();break;default:n["public"]=!1,n.discoverable=!1,$(".show-on-public").hide(),$(".show-on-private").show()}return r=function(){return h("Update of camera permissions failed. Please contact support."),t.removeAttr("disabled"),!1},i=function(e){return e.success?p("Camera permissions successfully updated."):h("Update of camera permissions failed. Please contact support."),t.removeAttr("disabled"),!0},s={cache:!1,data:n,dataType:"json",error:r,success:i,type:"POST",url:"/share/camera/"+a},t.attr("disabled","disabled"),u(s),!0},r=function(e){var t,a,n,r,i,o;return e.preventDefault(),t=$(e.currentTarget),i=t.parent().parent().parent(),a={camera_id:t.attr("camera_id"),share_id:t.attr("share_id")},n=function(){return h("Delete of camera shared failed. Please contact support."),!1},r=function(e){var t;return e.success?(t=function(){return i.remove()},i.fadeOut(t)):h("Delete of camera shared failed. Please contact support."),!0},o={cache:!1,data:a,dataType:"json",error:n,success:r,type:"DELETE",url:"/share"},u(o),!0},i=function(e){var t,a,n,r,i,o;return e.preventDefault(),t=$(e.currentTarget),i=t.parent().parent().parent(),a={camera_id:t.attr("camera_id"),email:t.attr("email")},n=function(){return h("Delete of share request failed. Please contact support."),!1},r=function(e){var t;return e.success?(t=function(){return i.remove()},i.fadeOut(t)):h("Delete of share request failed. Please contact support."),!0},o={cache:!1,data:a,dataType:"json",error:n,success:r,type:"DELETE",url:"/share/request"},u(o),!0},n=function(a){var n,r,i,o;return a.preventDefault(),n=$("#sharingUserEmail").val(),o="Full Rights"!==$("#sharingPermissionLevel").val()?"minimal":"full",r=function(){return h("Failed to share camera."),!1},i=function(t){var a;if(t.success)"share"===t.type?(e(t),p("Camera successfully shared with user")):("share_request"===t.type,e(t),p("A notification email has been sent to the specified email address.")),$("#sharingUserEmail").val("");else{switch(a="Adding a camera share failed.",t.code){case"camera_not_found_error":a="Unable to locate details for the camera in the system. Please refresh your view and try again.";break;case"duplicate_share_error":a="The camera has already been shared with the specified user.";break;case"duplicate_share_request_error":a="A share request for that email address already exists for this camera.";break;case"share_grantor_not_found_error":a="Unable to locate details for the user granting the share in the system.";break;case"invalid_parameters":a="Invalid rights specified for share creation request.";break;default:a=t.message}h(a)}return!0},t($("#sharing_tab_camera_id").val(),n,o,i,r),!0},s=function(e){var t,a,n,r,i,o,s;return e.preventDefault(),t=$(this),o=t.parent().parent(),a=o.find("select"),n={permissions:a.val(),camera_id:$("#ec_cam_id").text().trim()},r=function(){return h("Update of share failed. Please contact support."),!1},i=function(e){return e.success?(p("Share successfully updated."),t.fadeOut()):h("Update of share failed. Please contact support."),!0},s={cache:!1,data:n,dataType:"json",error:r,success:i,type:"PATCH",url:"/share/"+o.attr("share-id")},u(s),!0},c=function(e){var t,a,n,r,i,o,s;return e.preventDefault(),t=$(this),o=t.parent().parent(),a=o.find("select"),n={permissions:a.val(),camera_id:$("#ec_cam_id").text().trim()},r=function(){return h("Update of share request failed. Please contact support."),!1},i=function(e){return e.success?(p("Share request successfully updated."),t.fadeOut()):h("Update of share request failed. Please contact support."),!0},s={cache:!1,data:n,dataType:"json",error:r,success:i,type:"PATCH",url:"/share/request/"+o.attr("share-request-id")},u(s),!0},t=function(e,t,a,n,r){var i,o;return i={camera_id:e,email:t,permissions:a},o={cache:!1,data:i,dataType:"json",error:r,success:n,type:"POST",url:"/share"},u(o),!0},o=function(){return $(this).parent().parent().parent().find("td:eq(2) button").fadeIn(),!0},l=function(){var e;return e=$(this).val(),$("div.desc").hide(),$("#Shares"+e).show(),!0},a=function(){return $("#set_permissions_submit").click(d),$(".delete-share-control").click(r),$(".delete-share-request-control").click(i),$("#submit_share_button").click(n),$(".update-share-button").click(s),$(".update-share-request-button").click(c),$(".save").hide(),$(".reveal").focus(o),$("input[name$='sharingOptionRadios']").click(l),Notification.init(".bb-alert"),!0},window.Evercam||(window.Evercam={}),window.Evercam.Share={initializeTab:a,createShare:t}}).call(this),function(){var e,t,a,n,r,i,o,s,c,d,l,u,h,p,v,f,m,g,_,w,b,k,y,C,T,D,M,S,E,x,P,j,I,R,F,L,N,O,q,U,Y,z,B,H,A,W,X,G,Q,Z,J,V,K,et,tt,at,nt,rt,it,ot,st,ct,dt,lt,ut;P="https://api.evercam.io/v1/",ct=null,dt=0,st=0,L=0,j=0,w="tdI8",e=null,i=null,Q=!1,_=!1,tt=250,r=3600,V=1e3,lt=0,R="",Z=r,ot=679,K=1,at=1,n=0,ut=null,et=null,nt=function(e){var t,a;return a=$('meta[name="csrf-token"]'),a.size()>0&&(t={"X-CSRF-Token":a.attr("content")},e.headers=t),ut=jQuery.ajax(e),!0},X=function(){return $("#ui_date_picker_inline").datepicker().on("changeDate",O).on("changeMonth",N),$("#ui_date_picker_inline table th[class*='prev']").on("click",function(){return I("p")}),$("#ui_date_picker_inline table th[class*='next']").on("click",function(){I("n")}),$("#hourCalandar td[class*='day']").on("click",function(){y($(this).html(),"tdI"+$(this).html())}),!0},I=function(e){var t,a,n,r,i,o,s,c;return ut.abort(),$("#ui_date_picker_inline").datepicker("fill"),r=$("#ui_date_picker_inline").datepicker("getDate"),o=r.getMonth(),"n"===e&&(o+=2),13===o&&(o=1),0===o&&(o=12),n=$("#recording_tab_camera_id").val(),t=$("#recording_tab_api_id").val(),a=$("#recording_tab_api_key").val(),i={},i.api_id=t,i.api_key=a,s=function(){return!1},c={cache:!1,data:i,dataType:"json",error:s,success:f,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+n+"/snapshots/"+r.getFullYear()+"/"+o+"/days.json"},nt(c),"n"===e?r.setMonth(r.getMonth()+1):"p"===e&&r.setMonth(r.getMonth()-1),$("#ui_date_picker_inline").datepicker("setDate",r),ct=null,st=1,L=0,!0},O=function(a){var n,r,o,s,c;for(n=a.date,$("#divPointer").width(0),$("#divSlider").width(0),$("#ddlRecMinutes").val(0),$("#ddlRecSeconds").val(0),$("#divDisableButtons").removeClass("hide").addClass("show"),$("#divFrameMode").removeClass("show").addClass("hide"),$("#divPlayMode").removeClass("show").addClass("hide"),r=!1,s=0,c=e.length;c>s;s++)if(o=e[s],o===n.getDate()){r=!0;break}return F(),r?t(!1):m(),i=setTimeout(b,100),!0},N=function(e){var t,a,n,r,i,o,s;return r=e.date,n=$("#recording_tab_camera_id").val(),t=$("#recording_tab_api_id").val(),a=$("#recording_tab_api_key").val(),i={},i.api_id=t,i.api_key=a,o=function(){return!1},s={cache:!1,data:i,dataType:"json",error:o,success:f,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+n+"/snapshots/"+r.getFullYear()+"/"+(r.getMonth()+1)+"/days.json"},nt(s),ct=null,st=1,L=0,!0},F=function(){var e;return $("#hourCalandar td[class*='day']").removeClass("active"),e=$("#hourCalandar td[class*='day']"),e.each(function(){var e;return e=$(this),e.removeClass("has-snapshot")}),!0},b=function(){var t;clearTimeout(i),null!=e&&(t=$("#ui_date_picker_inline table td[class*='day']"),t.each(function(){var t,a,n;if(t=$(this),!t.hasClass("old")&&!t.hasClass("new"))for(a=parseInt(t.text()),n=0;n<e.length;){if(e[n]===a){t.addClass("has-snapshot");break}n++}}))},H=function(){var e,t,a;return t=function(e){var t,a,n,r,i,o,s;if(null!==ct&&0!==ct.length)return o=$("#divSlider").offset().left,i=o+$("#divSlider").width(),r=(e.pageX-o)/(i-o),0>r&&(r=0),a=Math.round(r*dt),a>dt-1&&(a=dt-1),s=e.pageX-80,s>i-80&&(s=i-80),n="",t=a+1,$("#divPopup").html("Frame "+t+", "+(rt(new Date(1e3*ct[a].created_at))+n)),$("#divPopup").show(),$("#divPopup").offset({top:e.pageY+20,left:s}),$("#divSlider").css("background-position",""+(e.pageX-o)+"px 0px"),$("#divPointer").css("background-position",""+(e.pageX-o)+"px 0px"),!0},$("#divSlider").mousemove(t),a=function(){return $("#divPopup").hide(),$("#divSlider").css("background-position","-3px 0px"),$("#divPointer").css("background-position","-3px 0px"),!0},$("#divSlider").mouseout(a),e=function(e){var t,a,n,r,i;return r=$("#divSlider").offset().left,n=r+$("#divSlider").width(),i=e.pageX-r,a=i/(n-r),t=parseInt(dt*a),0>t&&(t=0),t>dt&&(t=dt),t!==dt&&t!==st?(it(),st=t,L=st+1,x(ct[t]),!0):void 0},$("#divSlider").click(e),!0},it=function(){return-1!==$("#imgPlayback").attr("src").indexOf("nosnapshots")&&$("#imgPlayback").attr("src","/assets/plain.png"),$("#imgLoaderRec").width($("#imgPlayback").width()),$("#imgLoaderRec").height($("#imgPlayback").height()),$("#imgLoaderRec").css("top",$("#imgPlayback").css("top")),$("#imgLoaderRec").css("left",$("#imgPlayback").css("left")),$("#imgLoaderRec").show(),!0},C=function(e,t){var a,n;return $("#divInfo").fadeIn(),$("#divInfo").html("<b>Frame "+e+" of "+lt+"</b> "+t),a=$("#divSlider").width(),$("#divPointer").width(a*e/dt),n=""+$("#tab-url").val()+"?date_time="+t.replace(RegExp("/","g"),"-").replace(" ","T")+"Z#recording",$("#share-url").val(n),"Snapshots"===$(".nav-tabs li.active a").html()&&history.pushState&&window.history.pushState({path:n},"",n),!0},x=function(e){return it(),C(L,rt(new Date(1e3*e.created_at))),J(e.created_at),!0},U=function(e){var t,a,n;return e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),a="[\\?&]"+e+"=([^&#]*)",t=new RegExp(a),n=t.exec(window.location.href),null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))},Y=function(){var e,a,r;return r=$("#camera_time_offset").val(),n=parseInt(r)/3600,e=q(r),j=e.getHours(),$("#hourCalandar td[class*='day']").removeClass("active"),a=U("date_time"),""!==a&&(et=S(a.replace(RegExp("-","g"),"/").replace("T"," ").replace("Z","")),e=et,j=e.getHours(),$("#ui_date_picker_inline").datepicker("update",e)),$("#tdI"+j).addClass("active"),w="tdI"+j,$("#ui_date_picker_inline").datepicker("setDate",e),$(".btn-group").tooltip(),it(),v(),t(!1),!0},q=function(e){var t,a,n;return t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset(),n+=parseInt(e),a=new Date(n)},v=function(){var e,t,a,n,r,i,o;return n=$("#ui_date_picker_inline").datepicker("getDate"),a=$("#recording_tab_camera_id").val(),e=$("#recording_tab_api_id").val(),t=$("#recording_tab_api_key").val(),r={},r.api_id=e,r.api_key=t,i=function(){return!1},o={cache:!1,data:r,dataType:"json",error:i,success:f,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+a+"/snapshots/"+n.getFullYear()+"/"+(n.getMonth()+1)+"/days.json"},nt(o),!0},f=function(t){var a;return a=$("#ui_date_picker_inline table td[class*='day']"),e=t.days,a.each(function(){var e,a,n,r,i,o,s;if(e=$(this),!e.hasClass("old")&&!e.hasClass("new")){for(a=parseInt(e.text()),o=t.days,s=[],r=0,i=o.length;i>r;r++){if(n=o[r],n===a){e.addClass("has-snapshot"),null!==et&&et.getDate()===a&&e.addClass("active");break}s.push(void 0)}return s}}),!0},t=function(e){var t,n,r,i,o,s,c;return $("#divDisableButtons").removeClass("hide").addClass("show"),$("#divFrameMode").removeClass("show").addClass("hide"),$("#divPlayMode").removeClass("show").addClass("hide"),i=$("#ui_date_picker_inline").datepicker("getDate"),r=$("#recording_tab_camera_id").val(),t=$("#recording_tab_api_id").val(),n=$("#recording_tab_api_key").val(),o={},o.api_id=t,o.api_key=n,s=function(){return!1},c={cache:!1,data:o,dataType:"json",error:s,success:a,context:{isCall:e},contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+r+"/snapshots/"+i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate()+"/hours.json"},nt(c),!0},a=function(e){var t,a,r,i,o,s,c;for(i=0,t=!1,c=e.hours,o=0,s=c.length;s>o;o++)a=c[o],r=a+n,$("#tdI"+r).addClass("has-snapshot"),i=r,t=!0;return t?this.isCall?d(!0):(null!==et&&(i=j),y(i,"tdI"+i)):m(),!0},d=function(e){var t,a,n,i,o,s,c,d,v;return $("#divDisableButtons").removeClass("hide").addClass("show"),$("#divFrameMode").removeClass("show").addClass("hide"),$("#divPlayMode").removeClass("show").addClass("hide"),e&&it(),o=l()/1e3,v=u()/1e3,n=$("#recording_tab_camera_id").val(),t=$("#recording_tab_api_id").val(),a=$("#recording_tab_api_key").val(),i={},i.from=o,i.to=v,i.limit=Z,i.page=1,i.api_id=t,i.api_key=a,s=function(){return!1},c=function(e){var t,a,n;return st=0,ct=e.snapshots,dt=e.snapshots.length,lt=e.snapshots.length,null===e||0===e.snapshots.length?($("#divSliderMD").width("100%"),$("#MDSliderItem").html(""),$("#divNoMd").show(),m(),p()):($("#divDisableButtons").removeClass("show").addClass("hide"),$("#divFrameMode").removeClass("hide").addClass("show"),a=Math.ceil(lt/r),ot=Math.ceil(100/a),ot>100&&(ot=100),$("#divSlider").width(""+ot+"%"),L=1,t=new Date(1e3*ct[st].created_at),n=ct[st].created_at,null!==et&&(n=h(et)/1e3,n=T(n),t=new Date(1e3*n),1!==L&&(et=null)),C(L,rt(t)),J(n)),!0},d={cache:!1,data:i,dataType:"json",error:s,success:c,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+n+"/snapshots/range.json"},nt(d),!0},J=function(e){var t,a,n,r,i,o,s;return n=$("#recording_tab_camera_id").val(),t=$("#recording_tab_api_id").val(),a=$("#recording_tab_api_key").val(),r={},r.with_data=!0,r.range=1,r.api_id=t,r.api_key=a,i=function(){return!1},o=function(e){return e.snapshots.length>0&&$("#imgPlayback").attr("src",e.snapshots[0].data),p(),!0},s={cache:!1,data:r,dataType:"json",error:i,success:o,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+n+"/snapshots/"+e+".json"},nt(s),!0},T=function(e){var t;for(t=0;t<ct.length;){if(ct[t].created_at>=e)return L=t+1,st=t,ct[t].created_at;t++}},h=function(e){var t;return t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())},S=function(e){var t,a,n,r;return n=e.substring(e.indexOf(" ")),t=e.substring(0,e.indexOf(" ")),r=n.split(":"),a=t.split("/"),new Date(a[2],a[1]-1,a[0],r[0],r[1],r[2])},rt=function(e){var t,a;return t=$("#ui_date_picker_inline").datepicker("getDate"),a=parseInt(j),""+c(t.getDate())+"/"+c(t.getMonth()+1)+"/"+e.getFullYear()+" "+c(a)+":"+c(e.getMinutes())+":"+c(e.getSeconds())},l=function(){var e,t,a;return e=$("#ui_date_picker_inline").datepicker("getDate"),a=parseInt(j),t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),a,0,0)},u=function(){var e,t,a;return e=$("#ui_date_picker_inline").datepicker("getDate"),t=parseInt(j)+1,a=0,a=24===t?Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59):Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),t,0,0)},E=function(e){return e.length>1&&"0"===e.substr(0,1)?e.substr(1):e},o=function(e){var t,a,n,r,i,o,s;return null===e?"":(s=e.getFullYear(),i=e.getMonth()+1,t=e.getDate(),a=e.getHours(),r=e.getMinutes(),o=e.getSeconds(),n=""+e.getMilliseconds(),2===n.length?n="0"+n:1===n.length?n="00"+n:(0===n.length||0===n)&&(n=""),""+(c(s)+c(i)+c(t)+c(a)+c(r)+c(o)+n))},c=function(e){return 10>e?"0"+e:e},m=function(){return $("#divRecent").show(),$("#imgPlayback").attr("src","/assets/nosnapshots.svg"),$("#divInfo").fadeOut(),$("#divPointer").width(0),$("#divSliderBackground").width(0),$("#MDSliderItem").html(""),$("#divNoMd").show(),$("#divNoMd").text("No motion detected"),p(),dt=0,!0},y=function(e,t){var a;return a=$("#"+t).html(),$("#ddlRecMinutes").val(0),$("#ddlRecSeconds").val(0),j=e,$("#"+w).removeClass("active"),$("#"+t).addClass("active"),w=t,ct=null,g(),L=0,$("#divPointer").width(0),$("#divSlider").width("0%"),$("#divDisableButtons").removeClass("hide").addClass("show"),$("#divFrameMode").removeClass("show").addClass("hide"),$("#divPlayMode").removeClass("show").addClass("hide"),$("#"+t).hasClass("has-snapshot")?($("#divSliderBackground").width("100%"),$("#divSliderMD").width("100%"),$("#MDSliderItem").html(""),$("#divNoMd").show(),$("#btnCreateHourMovie").removeAttr("disabled"),d(!0)):(ut.abort(),$("#divRecent").show(),$("#divInfo").fadeOut(),$("#divSliderBackground").width("0%"),$("#txtCurrentUrl").val(""),$("#divSliderMD").width("100%"),$("#MDSliderItem").html(""),$("#btnCreateHourMovie").attr("disabled",!0),dt=0,$("#imgPlayback").attr("src","/assets/nosnapshots.svg"),$("#divNoMd").show(),$("#divNoMd").text("No motion detected"),p()),!0},g=function(){return Q=!1,$("#divFrameMode").removeClass("hide").addClass("show"),$("#divPlayMode").removeClass("show").addClass("hide"),_=!0},p=function(){return $("#imgLoaderRec").hide()},W=function(){return $(window).on("resize",function(){var e;return e=$("#divSlider").width(),$("#divPointer").width(e*L/dt)})},B=function(){return $("#btnPlayRec").on("click",function(){return 0!==dt?(K=1,at=1,$("#divFrameMode").removeClass("show").addClass("hide"),$("#divPlayMode").removeClass("hide").addClass("show"),Q=!0,ct.length===st+1&&(st=0,L=1),s()):void 0}),$("#btnPauseRec").on("click",function(){return g()}),$("#btnFRwd").on("click",function(){return D(10,-1)}),$("#btnRwd").on("click",function(){return D(5,-1)}),$("#btnFFwd").on("click",function(){return D(10,1)}),$("#btnFwd").on("click",function(){return D(5,1)}),$(".skipframe").on("click",function(){switch($(this).html()){case"+ Frame":return M(1,"n");case"+5":return M(5,"n");case"+10":return M(10,"n");case"+100":return M(100,"n");case"- Frame":return M(1,"p");case"-5":return M(5,"p");case"-10":return M(10,"p");case"-100":return M(100,"p")}})},M=function(e,t){if("p"===t){if(0===st)return;0>st-e?(L=1,st=0):(L-=e,st-=e)}else if("n"===t){if(ct.length===st+1)return;st+e>ct.length-1?(st=ct.length-1,L=ct.length):(L+=e,st+=e)}_=!1,K=1,x(ct[st])},D=function(e,t){K=t,at=e},s=function(){var e,t,a,n,r,i,o,c;if(0!==dt){if(ct.length===st)return g(),L=ct.length,void(st=ct.length-1);c=ct[st],a=$("#recording_tab_camera_id").val(),e=$("#recording_tab_api_id").val(),t=$("#recording_tab_api_key").val(),n={},n.with_data=!0,n.range=1,n.api_id=e,n.api_key=t,r=function(){return 1===K&&1===at?(L++,st++):1===K&&at>1?(L+=at,L>=ct.length&&(L=ct.length),st+=at,st>ct.length-1&&(st=ct.length-1)):-1===K&&at>1&&(L-=at,1>=L&&(L=1),st-=at,0>st&&(st=0),0===st&&g()),Q&&window.setTimeout(s,tt),!1},i=function(e){return e.snapshots.length>0&&C(L,rt(new Date(1e3*c.created_at))),$("#imgPlayback").attr("src",e.snapshots[0].data),1===K&&1===at?(L++,st++):1===K&&at>1?(L+=at,L>=ct.length&&(L=ct.length),st+=at,st>ct.length-1&&(st=ct.length-1)):-1===K&&at>1&&(L-=at,1>=L&&(L=1),st-=at,0>st&&(st=0),0===st&&g()),Q&&window.setTimeout(s,tt),!0},o={cache:!1,data:n,dataType:"json",error:r,success:i,contentType:"application/json; charset=utf-8",type:"GET",url:""+P+"cameras/"+a+"/snapshots/"+c.created_at+".json"},nt(o)}},k=function(){var e,t,a,n,r,i;if(a=c($("#ddlRecMinutes").val()),r=c($("#ddlRecSeconds").val()),e=Math.round(ct.length/60*parseInt(a)),e<ct.length-1)for(t=0;t<ct.length;){if(i=ct[t],n=i.date.substring(i.date.indexOf(" ")+1).split(":"),n[1]===a){if(n[2]===r)return L=t+1,st=t,void x(i);if(n[2]>r)return L=t,st=t-1,i=ct[st],n=i.date.substring(i.date.indexOf(" ")+1).split(":"),$("#ddlRecSeconds").val(n[2]),void x(i)}else if(n[1]>a)return L=t,st=t-1,i=ct[st],n=i.date.substring(i.date.indexOf(" ")+1).split(":"),$("#ddlRecSeconds").val(n[2]),void x(i);t++}else L=ct.length+1,st=ct.length,x(ct[st])},z=function(){var e,t;for(e=1;59>=e;)t=$("<option>").val(c(e)).append(c(e)),$("#ddlRecMinutes").append(t),t=$("<option>").val(c(e)).append(c(e)),$("#ddlRecSeconds").append(t),e++;$("#ddlRecMinutes").on("change",function(){k()}),$("#ddlRecSeconds").on("change",function(){k()})},A=function(){return $('a[data-toggle="tab"]').on("click",function(){var e;return e=$(this).html(),"Snapshots"===e&&null===et?d(!1):void 0}),$("#share-url").on("click",function(){return this.select()})},G=function(){return X(),H(),W(),Y(),z(),B(),A(),!0},window.Evercam||(window.Evercam={}),window.Evercam.Recordings={initializeTab:G}}.call(this),function(){var e,t,a,n,r,i,o,s,c,d;t="/assets/offline.svg",o=void 0,s=!1,r=void 0,c=function(){var e,t;e=new Image,t=""+$("#live-snapshot-url").val()+"&rand="+(new Date).getTime(),e.onload=function(){return r.parent?r.parent.replaceChild(e,r):r.src=t,$(".btn-live-player").removeClass("hide")},e.src=t},n=function(){return $('a[data-toggle="tab"]').on("click",function(){var e;return window.Evercam.cameraIsOnline?(e=$(this).html(),s||"Live View"!==e?clearInterval(o):o=setInterval(c,1e3)):void 0})},e=function(){return $(".play-pause").on("click",function(){return s?(o=setInterval(c,1e3),s=!1,$(this).children().removeClass("icon-control-play"),$(this).children().addClass("icon-control-pause")):(clearInterval(o),s=!0,$(this).children().removeClass("icon-control-pause"),$(this).children().addClass("icon-control-play"))}),$(".refresh-live-snap, .refresh-camera").on("click",function(){return c()}),!0},a=function(){$("#toggle").click(function(){return screenfull.toggle($("#live-player-image")[0])})},d=function(e){var a;a=new Image,a.onerror=function(){return e.src=t,"live-player-image"===e.id?($(".btn-live-player").addClass("hide"),$(".refresh-live-snap").removeClass("hide")):void 0},a.src=e.src},i=function(){var t,i,o,s;for(r=document.getElementById("live-player-image"),n(),e(),a(),s=document.getElementsByTagName("IMG"),i=0,o=s.length;o>i;i++)t=s[i],d(t);return!0},window.Evercam||(window.Evercam={}),window.Evercam.Live={initializeTab:i}}.call(this),function(){var e,t,a,n,r,i,o,s,c,d,l,u,h;d=void 0,c=function(){return!0},h=function(){return $(".nav-tabs a[href=#sharing]").tab("show"),setTimeout(function(){return scrollTo(0,0)},10)},o=function(e){return e.preventDefault(),u(!0),!0},l=function(e){return $("#change_owner_error").text(e),""===e?$("#change_owner_error").hide():$("#change_owner_error").show(),!0},s=function(e){var t,a,n,r,i,o;return e.preventDefault(),n=$("#new_owner_email"),""!==n.val()&&(a=$("#change_owner_dialog"),a.modal("hide"),l(""),r=function(){return l("An error occurred transferring ownership of this camera. Please try again and, if the problem persists, contact support."),u(!1),!0},i=function(e){var t;return e.success?(alert("Camera ownership has been successfully transferred."),t=window.location,t.assign(t.protocol+"//"+t.host)):(l(e.message),u(!1)),!0},t={camera_id:$("#change_owner_camera_id").val(),email:n.val()},o={cache:!1,data:t,error:r,success:i,url:"/cameras/transfer"},jQuery.ajax(o)),!0},u=function(e){var t;return e&&($("#new_owner_email").val(""),$("#change_owner_error").hide()),$("#change_owner_dialog").modal("show"),t=function(){return $("#new_owner_email").select()},setTimeout(t,200),!0},a=function(){return $("#camera-vendor").one("focus",function(){return d=this.value}).on("change",function(){return $("#camera-model"+d).addClass("hidden"),$("#camera-model"+this.value).removeClass("hidden"),$("#snapshot").val($("#camera-model"+this.value).find(":selected").attr("jpg-val")),d=this.value}),$(".camera-model").on("change",function(){return $("#snapshot").val($(this).find(":selected").attr("jpg-val"))}),!0},i=function(){var e,t,a,n,r;"0"===cameraLong&&$("#co-ordinates").replaceWith("<p>The location is not set. Drag the marker to the location of your camera.</p>"),"0"!==cameraLong&&$(".edit-location").click(function(){return $("#testies").toggle()}),e=new google.maps.LatLng(cameraLat,cameraLong),n="0"===cameraLong?{zoom:0,minZoom:2,maxZoom:17,center:e}:{zoom:14,minZoom:2,maxZoom:17,center:e},t=new google.maps.Map(document.getElementById("map-info"),n),r=new google.maps.Marker({position:e,map:t,draggable:!1,title:"Camera Location"}),a=!1,$("#nav-tabs-2").click(function(){return a||setTimeout(function(){google.maps.event.trigger(t,"resize"),a=!0,t.setCenter(e)},200)}),google.maps.event.addListener(r,"dragend",function(){return $("#location-settings").css("display","block")}),google.maps.event.addListener(r,"dragend",function(){var e;return e=r.getPosition(),t.panTo(e),document.getElementById("cameraLats").value=e.lat(),document.getElementById("cameraLng").value=e.lng(),$(cameraLats).val(r.getPosition().lat().toFixed(7)),$(cameraLng).val(r.getPosition().lng().toFixed(7))})},t=function(){return $(".modal").on("show.bs.modal",e),$(window).on("resize",function(){return $(".modal:visible").each(e)}),$(".modal").on("hidden.bs.modal",function(){return $(this).find("form")[0].reset()})},e=function(){var e,t;return $(this).css("display","block"),e=$(this).find(".modal-dialog"),t=($(window).height()-e.height())/2,e.css("margin-top",t)},n=function(){return Notification.init(".bb-alert"),notifyMessage?Notification.show(notifyMessage):void 0},r=function(){return $("#set_permissions_submit").click(c),$(".open-sharing").click(h),$("#change_owner_button").click(o),$("#submit_change_owner_button").click(s),""===cameraLong&&$("#info-location").replaceWith("<p>Not set</p>"),$.validate(),a(),google.maps.event.addDomListener(window,"load",i),t(),n(),!0},window.Evercam||(window.Evercam={}),window.Evercam.Info={initializeTab:r}}.call(this),function(){var e,t;t=function(){return!0},e=function(){return $("#set_permissions_submit").click(t),!0},window.Evercam||(window.Evercam={}),window.Evercam.Settings={initializeTab:e}}.call(this),function(){var e,t;t=function(){return!0},e=function(){return $("#set_permissions_submit").click(t),!0},window.Evercam||(window.Evercam={}),window.Evercam.Explorer={initializeTab:e}}.call(this),function(){var e,t,a,n;t=null,n=function(){var e,a,n,r,i,o,s;return e=$("#exid").val(),i=$("#current-page").val(),s=[],$.each($("input[name='type']:checked"),function(){return s.push($(this).val())}),a=new Date($("#datetimepicker").val()).getTime()/1e3,o=new Date($("#datetimepicker2").val()).getTime()/1e3,n="",isNaN(a)||(n+="&from="+a),isNaN(o)||(n+="&to="+o),r=$("#base-url").val()+"&page="+i+"&types="+s.join()+n,null!=t&&t.ajax.url(r).load(),null==t&&$("#ajax-url").val(r),!0},a=function(){return $("#all-types").is(":checked")?$("input[name='type']").prop("checked",!0):$("input[name='type']").prop("checked",!1)},e=function(){return $("#apply-types").click(n),$(".datetimepicker").datetimepicker(),$("#all-types").click(a),jQuery.fn.DataTable.ext.type.order["string-date-pre"]=function(e){return moment(e,"MMMM Do YYYY, H:mm:ss").format("X")},n(),t=$("#logs-table").DataTable({ajax:{url:$("#ajax-url").val(),dataSrc:"logs",error:function(e){return Notification.show(e.responseJSON.message)}},columns:[{data:function(e){return moment(1e3*e.done_at).format("MMMM Do YYYY, H:mm:ss")},orderDataType:"string-date",type:"string-date"},{data:function(e){return"shared"===e.action||"stopped sharing"===e.action?e.action+" with "+e.extra["with"]:e.action},className:"log-action"},{data:function(e){return"online"===e.action||"offline"===e.action?"System":e.who}}],iDisplayLength:50,order:[[0,"desc"]]}),!0},window.Evercam||(window.Evercam={}),window.Evercam.Logs={initializeTab:e}}.call(this),function(){var e,t,a,n,r,i,o,s,c;s=function(e){return Notification.show(e),!0},c=function(e){return Notification.show(e),!0},o=function(e){var t,a;return a=$('meta[name="csrf-token"]'),a.size()>0&&(t={"X-CSRF-Token":a.attr("content")},e.headers=t),jQuery.ajax(e),!0},e=function(e){var t,a,n,i,o;return i=$("<tr>"),i.attr("webhook-id",e.id),n=document.createElement("a"),n.appendChild(document.createTextNode(e.url)),n.href=e.url,n.target="_blank",t=$("<td>",{"class":"col-lg-8"}),t.append(n),i.append(t),t=$("<td>",{"class":"col-lg-2"}),a=$("<div>",{"class":"form-group"}),o=$("<span>"),o.append($("<span>",{"class":"glyphicon glyphicon-remove"})),o.addClass("delete-webhook-control"),o.append($(document.createTextNode(" Remove"))),o.click(r),o.attr("webhook_id",e.webhook_id),o.attr("camera_id",e.camera_id),a.append(o),t.append(a),i.append(t),i.hide(),$("#webhook_list_table tbody").append(i),i.fadeIn(),!0},r=function(e){var t,a,n,r,i,c;return e.preventDefault(),t=$(e.currentTarget),i=t.parent().parent().parent(),a={camera_id:t.attr("camera_id"),webhook_id:t.attr("webhook_id")},n=function(){return s("Deleting webhook failed. Please contact support."),!1},r=function(){var e;return t.off(),e=function(){return i.remove()},i.fadeOut("slow",e),!0},c={cache:!1,data:a,dataType:"json",error:n,success:r,type:"DELETE",url:"/webhooks/"+i.attr("webhook-id")},o(c),!0},n=function(a){var n,r,i;return a.preventDefault(),i=$("#newWebhookUrl").val(),""===i?void s("Webhook URL can't be blank."):(n=function(){return s("Failed to add new webhook to the camera."),!1},r=function(t){return t.success?(e(t),c("Webhook successfully added to the camera"),$("#newWebhookUrl").val("")):s("Failed to add new webhook to the camera. The provided url is not valid."),!0},t($("#sharing_tab_camera_id").val(),i,r,n),!0)},t=function(e,t,a,n){var r,i;return r={camera_id:e,url:t,user_id:window.Evercam.current_user},i={cache:!1,data:r,dataType:"json",error:n,success:a,type:"POST",url:"/webhooks"},o(i),!0},i=function(){return $(this).parent().parent().parent().find("td:eq(2) button").fadeIn(),!0},a=function(){return $(".delete-webhook-control").click(r),$("#submit_webhook_button").click(n),$("#newWebhookUrl").keypress(function(e){return 13===e.which?$("#submit_webhook_button").trigger("click"):void 0}),$(".save").hide(),$(".reveal").focus(i),Notification.init(".bb-alert"),!0},window.Evercam||(window.Evercam={}),window.Evercam.Webhook={initializeTab:a,createWebhook:t}}.call(this),$(document).ready(function(){Metronic.init(),Layout.init(),QuickSidebar.init(),handleScrollToEvents()});