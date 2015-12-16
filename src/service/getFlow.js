
/**
 * [flow mock data]
 * @type {Object}
 */
var flow = {
    "appId": 0,
    "createDate": 1398355200000,
    "creatorId": 1,
    "iconxml": "<mxGraphModel>\n  <root>\n    <mxCell id=\"0\"/>\n    <mxCell id=\"1\" parent=\"0\"/>\n    <StartNode Name=\"开始\" Type=\"start-state\" Data=\"{}\" id=\"2\">\n      <mxCell style=\"image=/assets/images/component-start-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"140\" y=\"110\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </StartNode>\n    <EndNode Name=\"结束\" Type=\"end-state\" Data=\"{}\" id=\"3\">\n      <mxCell style=\"image=/assets/images/component-end-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"1080\" y=\"500\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </EndNode>\n    <CustomNode Name=\"hpux物理机安装数据初始化 \" Type=\"501\" Data=\"{&quot;compId&quot;:&quot;3645700&quot;,&quot;name&quot;:&quot;hpux物理机安装数据初始化 &quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7943482&quot;,&quot;serPolicyCode&quot;:&quot;上传脚本到vioc_20140425&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;01&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;&quot;}]}\" ComponentId=\"3645700\" Path=\"/pages/workflow/formPage/apiForm.jsp\" id=\"4\">\n      <mxCell style=\"image=/assets/images/component-api-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"270\" y=\"110\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"获取MAC地址\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;\\u83b7\\u53d6MAC\\u5730\\u5740&quot;,&quot;outTime&quot;:&quot;1500&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;\\u547d\\u4ee4\\u6267\\u884c_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/get_mac.sh -o &#39;[$oa_server_ip]&#39;            \\\\\\n              -U &#39;[$oa_login_user]&#39;        \\\\\\n              -P &#39;[$oa_login_passwd]&#39;      \\\\\\n              -B &#39;[$bay_id]&#39;               \\\\\\n              -s &#39;[$ilo_server_ip]&#39;        \\\\\\n              -u &#39;[$ilo_login_user]&#39;       \\\\\\n              -p &#39;[$ilo_login_passwd]&#39;     \\\\\\n              -n &#39;[$vm_name]&#39;              \\\\\\n              -t &#39;[$client_server_type]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"7\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"710\" y=\"110\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"配置安装服务器网络信息\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;配置安装服务器网络信息&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/set_bootp.sh   -M &#39;[$mac_addr]&#39; \\\\\\n               -i &#39;[$manage_ip]&#39; \\\\\\n               -x &#39;[$manage_subnetmask]&#39; \\\\\\n               -g &#39;[$manage_gateway]&#39; \\\\\\n               -n &#39;[$vm_name]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"8\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"880\" y=\"110\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"配置安装服务器操作系统信息\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;配置安装服务器操作系统信息&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/set_client.sh -M &#39;[$mac_addr]&#39; \\\\\\n              -t &#39;[$client_server_type]&#39; \\\\\\n              -m \\&quot;[$manage_ip]:[$manage_subnetmask]:[$manage_gateway]\\&quot; \\\\\\n              -n &#39;[$vm_name]&#39; \\\\\\n              -c &#39;[$install_cfg_name]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"9\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"1080\" y=\"110\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"启动服务器自动安装操作系统\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;启动服务器自动安装操作系统&quot;,&quot;outTime&quot;:&quot;1800&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/install_server.sh -o &#39;[$oa_server_ip]&#39;    \\\\\\n              -U &#39;[$oa_login_user]&#39;       \\\\\\n              -P &#39;[$oa_login_passwd]&#39;     \\\\\\n              -B &#39;[$bay_id]&#39;              \\\\\\n              -s &#39;[$ilo_server_ip]&#39;       \\\\\\n              -u &#39;[$ilo_login_user]&#39;      \\\\\\n              -p &#39;[$ilo_login_passwd]&#39;    \\\\\\n              -i &#39;[$manage_ip]&#39;           \\\\\\n              -x &#39;[$manage_subnetmask]&#39;   \\\\\\n              -g &#39;[$manage_gateway]&#39;      \\\\\\n              -M &#39;[$mac_addr]&#39;            \\\\\\n              -I &#39;[$ignite_server_ip]&#39;    \\\\\\n              -n &#39;[$vm_name]&#39;             \\\\\\n              -t &#39;[$client_server_type]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"10\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"1080\" y=\"240\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"检查安装日志确定是否完成\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;检查安装日志确定是否完成&quot;,&quot;outTime&quot;:&quot;3600&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/check_install_log.sh -M &#39;[$mac_addr]&#39; -n &#39;[$vm_name]&#39; -w&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"11\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"880\" y=\"240\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"检查客户端网络是否连通 \" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;检查客户端网络是否连通 &quot;,&quot;outTime&quot;:&quot;1200&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/check_ip_conn.sh -i &#39;[$manage_ip]&#39; -n &#39;[$vm_name]&#39; -w&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"12\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"710\" y=\"240\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"重启动验证\" Type=\"501\" Data=\"{&quot;compId&quot;:&quot;3645700&quot;,&quot;name&quot;:&quot;重启动验证&quot;,&quot;outTime&quot;:&quot;1800&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;38534&quot;,&quot;serPolicyCode&quot;:&quot;重启验证&quot;,&quot;serPolicy&quot;:[]}\" ComponentId=\"3645700\" Path=\"/pages/workflow/formPage/apiForm.jsp\" id=\"15\">\n      <mxCell style=\"image=/assets/images/component-api-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"270\" y=\"240\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"传输脚脚本到client\" Type=\"501\" Data=\"{&quot;compId&quot;:&quot;3645700&quot;,&quot;name&quot;:&quot;传输脚脚本到client&quot;,&quot;outTime&quot;:&quot;600&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;17232&quot;,&quot;serPolicyCode&quot;:&quot;上传脚本到vioc&quot;,&quot;serPolicy&quot;:[]}\" ComponentId=\"3645700\" Path=\"/pages/workflow/formPage/apiForm.jsp\" id=\"16\">\n      <mxCell style=\"image=/assets/images/component-api-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"140\" y=\"240\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"安装nbu\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;安装nbu&quot;,&quot;outTime&quot;:&quot;3600&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;nh_Install_NBU.sh&quot;,&quot;scriptId&quot;:&quot;7947337&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"17\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"140\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"安装patrol\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;安装patrol&quot;,&quot;outTime&quot;:&quot;3600&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;patrol_agent_V9.11.10_HPUX_64.sh&quot;,&quot;scriptId&quot;:&quot;7947339&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"18\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"270\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"安装ctm\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;安装ctm&quot;,&quot;outTime&quot;:&quot;3600&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;controlm_agent_V7.0.00_AIX_64.sh&quot;,&quot;scriptId&quot;:&quot;8899&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"19\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"420\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"安装APPMON\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;安装APPMON&quot;,&quot;outTime&quot;:&quot;1800&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;appmon_install.sh&quot;,&quot;scriptId&quot;:&quot;7947323&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"20\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"570\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"HPUX合规检查 \" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;HPUX合规检查 &quot;,&quot;outTime&quot;:&quot;1200&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;nh_hpux_check.sh&quot;,&quot;scriptId&quot;:&quot;7947334&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"21\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"710\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"other脚本运行\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;other脚本运行&quot;,&quot;outTime&quot;:&quot;1200&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;nh_hpux_other.sh&quot;,&quot;scriptId&quot;:&quot;7947332&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"22\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"880\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"清理系统\" Type=\"502\" Data=\"{&quot;compId&quot;:&quot;3645703&quot;,&quot;name&quot;:&quot;清理系统&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942746&quot;,&quot;serPolicyCode&quot;:&quot;Linux脚本执行_20140425&quot;,&quot;scriptCode&quot;:&quot;nh_hpux_clear.sh&quot;,&quot;scriptId&quot;:&quot;7947331&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXE_WAY&quot;,&quot;value&quot;:&quot;03&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645703\" Path=\"/pages/workflow/formPage/scriptForm.jsp\" id=\"23\">\n      <mxCell style=\"image=/assets/images/component-script-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"1080\" y=\"370\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <mxCell id=\"24\" value=\"\" parent=\"1\" source=\"2\" target=\"4\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"27\" value=\"\" parent=\"1\" source=\"6\" target=\"7\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"28\" value=\"\" parent=\"1\" source=\"7\" target=\"8\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"29\" value=\"\" parent=\"1\" source=\"8\" target=\"9\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"30\" value=\"\" parent=\"1\" source=\"9\" target=\"10\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"31\" value=\"\" parent=\"1\" source=\"10\" target=\"11\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"32\" value=\"\" parent=\"1\" source=\"11\" target=\"12\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"33\" value=\"\" parent=\"1\" source=\"12\" target=\"13\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"35\" value=\"\" parent=\"1\" source=\"14\" target=\"15\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"36\" value=\"\" parent=\"1\" source=\"15\" target=\"16\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"37\" value=\"\" parent=\"1\" source=\"16\" target=\"17\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"38\" value=\"\" parent=\"1\" source=\"17\" target=\"18\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"39\" value=\"\" parent=\"1\" source=\"18\" target=\"19\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"40\" value=\"\" parent=\"1\" source=\"19\" target=\"20\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"41\" value=\"\" parent=\"1\" source=\"20\" target=\"21\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"42\" value=\"\" parent=\"1\" source=\"21\" target=\"22\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"43\" value=\"\" parent=\"1\" source=\"22\" target=\"23\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"44\" value=\"\" parent=\"1\" source=\"23\" target=\"3\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <CustomNode ComponentId=\"3645702\" Name=\"命令执行\" Type=\"503\" Data=\"{}\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"45\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"1\" vertex=\"1\">\n        <mxGeometry x=\"130\" y=\"490\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"容器\" Type=\"container\" Data=\"{}\" id=\"46\">\n      <mxCell style=\"group\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"410\" y=\"10\" width=\"270\" height=\"150\" as=\"geometry\">\n          <mxRectangle width=\"50\" height=\"30\" as=\"alternateBounds\"/>\n        </mxGeometry>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"检查SN和机器类型\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;检查SN和机器类型&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/check_server_sn.sh -o &#39;[$oa_server_ip]&#39;   \\\\\\n              -U &#39;[$oa_login_user]&#39;       \\\\\\n              -P &#39;[$oa_login_passwd]&#39;     \\\\\\n              -B &#39;[$bay_id]&#39;              \\\\\\n              -s &#39;[$ilo_server_ip]&#39;       \\\\\\n              -u &#39;[$ilo_login_user]&#39;      \\\\\\n              -p &#39;[$ilo_login_passwd]&#39;    \\\\\\n              -S &#39;[$server_sn]&#39;           \\\\\\n              -n &#39;[$vm_name]&#39;             \\\\\\n              -t &#39;[$client_server_type]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"5\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"46\" vertex=\"1\">\n        <mxGeometry x=\"20\" y=\"50\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"获取server_bay_id\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;\\u83b7\\u53d6server_bay_id&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;\\u547d\\u4ee4\\u6267\\u884c_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/get_serv_bay.sh -s &#39;[$ilo_server_ip]&#39;  \\\\\\n              -n &#39;[$vm_name]&#39;                               \\\\\\n              -t &#39;[$client_server_type]&#39;                    \\\\\\n              -o &#39;[$oa_server_ip]&#39;                          \\\\\\n              -U &#39;[$oa_login_user]&#39;                         \\\\\\n              -P &#39;[$oa_login_passwd]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"6\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"46\" vertex=\"1\">\n        <mxGeometry x=\"170\" y=\"50\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <mxCell id=\"26\" value=\"\" parent=\"46\" source=\"5\" target=\"6\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"25\" value=\"\" parent=\"1\" source=\"4\" target=\"5\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <DecisionNode Name=\"选择\" Type=\"decision\" Data=\"{&quot;type&quot;:&quot;expression&quot;,&quot;nextNodes&quot;:[{&quot;nodeId&quot;:&quot;19&quot;,&quot;nodeName&quot;:&quot;安装ctm&quot;,&quot;nodeRoute&quot;:&quot;安装ctm&quot;,&quot;nodeExpression&quot;:&quot;1 == param&quot;},{&quot;nodeId&quot;:&quot;20&quot;,&quot;nodeName&quot;:&quot;安装APPMON&quot;,&quot;nodeRoute&quot;:&quot;安装APPMON&quot;,&quot;nodeExpression&quot;:&quot;2 &gt; param&quot;}],&quot;sqlData&quot;:&quot;&quot;}\" id=\"47\">\n      <mxCell style=\"image=/assets/images/component-decision-icon.png\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"390\" y=\"510\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </DecisionNode>\n    <mxCell id=\"48\" value=\"\" edge=\"1\" parent=\"1\" source=\"18\" target=\"47\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"49\" value=\"\" edge=\"1\" parent=\"1\" source=\"47\" target=\"19\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"50\" value=\"\" edge=\"1\" parent=\"1\" source=\"47\" target=\"20\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <ForkNode Name=\"分支\" Type=\"fork\" Data=\"{&quot;type&quot;:&quot;expression&quot;,&quot;routeArray&quot;:[{&quot;nodeRoute&quot;:&quot;安装APPMON,HPUX合规检查 &quot;,&quot;nodeRouteId&quot;:[&quot;20&quot;,&quot;21&quot;],&quot;nodeExpression&quot;:&quot;111 &gt; params&quot;},{&quot;nodeRoute&quot;:&quot;安装APPMON&quot;,&quot;nodeRouteId&quot;:[&quot;20&quot;],&quot;nodeExpression&quot;:&quot;222 &lt; params&quot;}]}\" id=\"51\">\n      <mxCell style=\"image=/assets/images/component-fork-icon.png\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"580\" y=\"500\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </ForkNode>\n    <mxCell id=\"52\" value=\"\" edge=\"1\" parent=\"1\" source=\"51\" target=\"20\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n    <mxCell id=\"53\" value=\"\" edge=\"1\" parent=\"1\" source=\"51\" target=\"21\">\n      <mxGeometry relative=\"1\" as=\"geometry\">\n        <Array as=\"points\">\n          <mxPoint x=\"750\" y=\"480\"/>\n        </Array>\n      </mxGeometry>\n    </mxCell>\n    <CustomNode Name=\"嵌套子流\" Type=\"sub-process\" Data=\"{}\" id=\"54\">\n      <mxCell style=\"image=/assets/images/component-subprocess-icon.png\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"70\" y=\"30\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode ComponentId=\"3645704\" Name=\"人工任务\" Type=\"504\" Data=\"{}\" Path=\"/pages/workflow/formPage/oaForm.jsp\" id=\"55\">\n      <mxCell style=\"image=/assets/images/component-hand-icon.png\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"260\" y=\"20\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"容器\" Type=\"container\" Data=\"{}\" id=\"56\">\n      <mxCell style=\"group\" vertex=\"1\" parent=\"1\">\n        <mxGeometry x=\"400\" y=\"190\" width=\"270\" height=\"150\" as=\"geometry\">\n          <mxRectangle width=\"50\" height=\"30\" as=\"alternateBounds\"/>\n        </mxGeometry>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"获取安装日志\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;获取安装日志&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/get_install_log.sh -M &#39;[$mac_addr]&#39; -n &#39;[$vm_name]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"13\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"56\" vertex=\"1\">\n        <mxGeometry x=\"170\" y=\"50\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <CustomNode Name=\"清除客户服务器安装信息\" Type=\"503\" Data=\"{&quot;compId&quot;:&quot;3645702&quot;,&quot;name&quot;:&quot;清除客户服务器安装信息&quot;,&quot;outTime&quot;:&quot;300&quot;,&quot;exceptionCode&quot;:&quot;WAIT&quot;,&quot;isAutoNode&quot;:&quot;Y&quot;,&quot;serPolicyId&quot;:&quot;7942742&quot;,&quot;serPolicyCode&quot;:&quot;命令执行_20140425&quot;,&quot;commandContent&quot;:&quot;/var/opt/ignite/auto/clean_client.sh -M &#39;[$mac_addr]&#39; -n &#39;[$vm_name]&#39;&quot;,&quot;serPolicy&quot;:[{&quot;id&quot;:&quot;EXEC_DEST_TYPE&quot;,&quot;value&quot;:&quot;IGNITE-Server&quot;},{&quot;id&quot;:&quot;EXEC_PROCESSING_OBJECT&quot;,&quot;value&quot;:&quot;VM-ALL&quot;},{&quot;id&quot;:&quot;HANDLER_THREAD_NUM&quot;,&quot;value&quot;:&quot;6&quot;}]}\" ComponentId=\"3645702\" Path=\"/pages/workflow/formPage/commandForm.jsp\" id=\"14\">\n      <mxCell style=\"image=/assets/images/component-command-icon.png\" parent=\"56\" vertex=\"1\">\n        <mxGeometry x=\"20\" y=\"50\" width=\"80\" height=\"80\" as=\"geometry\"/>\n      </mxCell>\n    </CustomNode>\n    <mxCell id=\"34\" value=\"\" parent=\"56\" source=\"13\" target=\"14\" edge=\"1\">\n      <mxGeometry relative=\"1\" as=\"geometry\"/>\n    </mxCell>\n  </root>\n</mxGraphModel>\n",
    "isActive": "Y",
    "modelId": "nh_hpux_install_v3.2_20140508",
    "templateId": 7947687,
    "templateName": "HP物理机安装流程图v3.2_20140508",
    "typeId": 532
}

/**
 * [getFlow description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function getFlow(id) {
	return flow 
}

module.exports = getFlow


