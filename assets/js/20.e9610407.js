(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(e,t,o){e.exports=o.p+"assets/img/sysreport.8d1d1d0e.png"},432:function(e,t,o){"use strict";o.r(t);var r=o(25),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-a-copy-of-your-dsdt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-copy-of-your-dsdt"}},[e._v("#")]),e._v(" Getting a copy of your DSDT")]),e._v(" "),r("p",[e._v("So to start, we'll need to get a copy of your DSDT from your firmware. The easiest way is grabbing the DSDT.aml SSDTTime dumped for us earlier but here are some other options:")]),e._v(" "),r("h2",{attrs:{id:"from-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-windows"}},[e._v("#")]),e._v(" From Windows")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("Supports both Windows and Linux for DSDT dumping")]),e._v(" "),r("li",[r("code",[e._v("7. Dump DSDT - Automatically dump the system DSDT")])])])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("acpidump.exe"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("In command prompt run "),r("code",[e._v("path/to/acpidump.exe -b -n DSDT -z")]),e._v(", this will dump your DSDT as a .dat file. Rename this to DSDT.aml")])])]),e._v(" "),r("li",[r("p",[e._v("Do note that all ACPI patches from clover/OpenCore will be applied to the DSDT with the above 2 methods")])])]),e._v(" "),r("h2",{attrs:{id:"from-linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-linux"}},[e._v("#")]),e._v(" From Linux")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Supports both Windows and Linux for DSDT dumping")]),e._v(" "),r("li",[r("code",[e._v("4. Dump DSDT - Automatically dump the system DSDT")])])])]),e._v(" "),r("li",[e._v("Do note that all ACPI patches from clover/OpenCore will be applied to the DSDT with the above method")])]),e._v(" "),r("h2",{attrs:{id:"from-clover"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-clover"}},[e._v("#")]),e._v(" From Clover")]),e._v(" "),r("p",[e._v("For those with Clover installed previously, this is a simple way to get your ACPI tables:")]),e._v(" "),r("ul",[r("li",[e._v("F4 in Clover Boot menu\n"),r("ul",[r("li",[e._v("DSDT can be found in "),r("code",[e._v("EFI/CLOVER/ACPI/origin")]),e._v(", the folder "),r("strong",[e._v("must")]),e._v(" exist before dumping")])])])]),e._v(" "),r("h2",{attrs:{id:"from-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-opencore"}},[e._v("#")]),e._v(" From OpenCore")]),e._v(" "),r("p",[e._v("With OpenCore, we have 2 options:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#sysreport-quirk"}},[e._v("SysReport Quirk")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#uefi-shell"}},[e._v("UEFI Shell")])])]),e._v(" "),r("h3",{attrs:{id:"sysreport-quirk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sysreport-quirk"}},[e._v("#")]),e._v(" SysReport Quirk")]),e._v(" "),r("p",[e._v("With OpenCore 0.5.9, we have a new quirk called SysReport which will actually dump your DSDT automatically when hitting the boot screen. The main issues are:")]),e._v(" "),r("ul",[r("li",[e._v("You already need a bootable OpenCore USB to get this dump")]),e._v(" "),r("li",[e._v("This also requires a DEBUG version of 0.5.9")])]),e._v(" "),r("p",[e._v("For the latter, you just need to replace the following files with "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("DEBUG version"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("EFI/BOOT/\n"),r("ul",[r("li",[r("code",[e._v("BOOTx64.efi")])])])]),e._v(" "),r("li",[e._v("EFI/OC/Bootstrap/\n"),r("ul",[r("li",[r("code",[e._v("Bootstrap.efi")])])])]),e._v(" "),r("li",[e._v("EFI/OC/Drivers/\n"),r("ul",[r("li",[r("code",[e._v("OpenRuntime.efi")])])])]),e._v(" "),r("li",[e._v("EFI/OC/\n"),r("ul",[r("li",[r("code",[e._v("OpenCore.efi")])])])])]),e._v(" "),r("p",[e._v("For the former, you can actually skip the ACPI section, return to the "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore guide"),r("OutboundLink")],1),e._v(" and finish making the USB. Once booted to the picker, you can shut off the PC and check your USB:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(377),alt:""}})]),e._v(" "),r("p",[e._v("And voila! You have a DSDT! Now you can continue on with making SSDTs")]),e._v(" "),r("h3",{attrs:{id:"uefi-shell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uefi-shell"}},[e._v("#")]),e._v(" UEFI Shell")]),e._v(" "),r("p",[e._v("For this, we'll want to grab "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/tree/master/extra-files/acpidump.efi.zip",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("acpidump.efi")]),r("OutboundLink")],1),e._v(" and add this to "),r("code",[e._v("EFI/OC/Tools")]),e._v(" and in your config under "),r("code",[e._v("Misc -> Tools")]),e._v(" with the argument: "),r("code",[e._v("-b -n DSDT -z")]),e._v(" and select this option in OpenCore's picker.")]),e._v(" "),r("p",[e._v("If OpenCore is having issues running acpidump.efi from the boot picker, you can call it from the shell with "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenShell"),r("OutboundLink")],1),e._v("(reminder to add to both "),r("code",[e._v("EFI/OC/Tools")]),e._v(" and in your config under "),r("code",[e._v("Misc -> Tools")]),e._v(" ):")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("shell> fs0: // replace with proper drive\nfs0:\\> dir  // to verify this is the right directory\n   Directory of fs0:\\\n   01/01/01 3:30p EFI\nfs0:\\> cd EFI\\OC\\Tools\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\t\t\n")])])]),r("p",[e._v("Once done, you should find your DSDT in the EFI/OC/Tools folder with a "),r("code",[e._v(".dat")]),e._v(" extension. Rename this DSDT.dat file to DSDT.aml to help us down the line")])])}),[],!1,null,null,null);t.default=a.exports}}]);