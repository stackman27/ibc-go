(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{669:function(e,t,a){"use strict";a.r(t);var n=a(1),c=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"implement-ibcmodule-interface-and-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implement-ibcmodule-interface-and-callbacks"}},[e._v("#")]),e._v(" Implement "),a("code",[e._v("IBCModule")]),e._v(" interface and callbacks")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to implement the "),a("code",[e._v("IBCModule")]),e._v(" interface and all of the callbacks it requires.")]),e._v(" "),a("p",[e._v("The Cosmos SDK expects all IBC modules to implement the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("IBCModule")]),e._v("\ninterface"),a("OutboundLink")],1),e._v(". This interface contains all of the callbacks IBC expects modules to implement. They include callbacks related to channel handshake, closing and packet callbacks ("),a("code",[e._v("OnRecvPacket")]),e._v(", "),a("code",[e._v("OnAcknowledgementPacket")]),e._v(" and "),a("code",[e._v("OnTimeoutPacket")]),e._v(").")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSUJDTW9kdWxlIGltcGxlbWVudHMgdGhlIElDUzI2IGludGVyZmFjZSBmb3IgZ2l2ZW4gdGhlIGtlZXBlci4KLy8gVGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBJQkNNb2R1bGUgaW50ZXJmYWNlIGNvdWxkIGZvciBleGFtcGxlIGJlIGluIGEgZmlsZSBjYWxsZWQgaWJjX21vZHVsZS5nbywKLy8gYnV0IHVsdGltYXRlbHkgZmlsZSBzdHJ1Y3R1cmUgaXMgdXAgdG8gdGhlIGRldmVsb3Blcgp0eXBlIElCQ01vZHVsZSBzdHJ1Y3QgewogIGtlZXBlciBrZWVwZXIuS2VlcGVyCn0K"}}),e._v(" "),a("p",[e._v("Additionally, in the "),a("code",[e._v("module.go")]),e._v(" file, add the following line:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyICgKICBfIG1vZHVsZS5BcHBNb2R1bGUgICAgICA9IEFwcE1vZHVsZXt9CiAgXyBtb2R1bGUuQXBwTW9kdWxlQmFzaWMgPSBBcHBNb2R1bGVCYXNpY3t9CiAgLy8gQWRkIHRoaXMgbGluZQogIF8gcG9ydHR5cGVzLklCQ01vZHVsZSAgID0gSUJDTW9kdWxle30KKQo="}}),e._v(" "),a("h2",{attrs:{id:"pre-requisites-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")]),e._v(")")],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC default integration")])],1)]),e._v(" "),a("h2",{attrs:{id:"channel-handshake-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-handshake-callbacks"}},[e._v("#")]),e._v(" Channel handshake callbacks")]),e._v(" "),a("p",[e._v("This section will describe the callbacks that are called during channel handshake execution. Among other things, it will claim channel capabilities passed on from core IBC. For a refresher on capabilities, check "),a("RouterLink",{attrs:{to:"/ibc/overview.html#capabilities"}},[e._v("the Overview section")]),e._v(".")],1),e._v(" "),a("p",[e._v("Here are the channel handshake callbacks that modules are expected to implement:")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that some of the code below is "),a("em",[e._v("pseudo code")]),e._v(", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the "),a("code",[e._v("checkArguments")]),e._v(" and "),a("code",[e._v("negotiateAppVersion")]),e._v(" functions.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ09wZW5Jbml0CmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuT3BlbkluaXQoY3R4IHNkay5Db250ZXh0LAogIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICBjb25uZWN0aW9uSG9wcyBbXXN0cmluZywKICBwb3J0SUQgc3RyaW5nLAogIGNoYW5uZWxJRCBzdHJpbmcsCiAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgdmVyc2lvbiBzdHJpbmcsCikgKHN0cmluZywgZXJyb3IpIHsKICAvLyAuLi4gZG8gY3VzdG9tIGluaXRpYWxpemF0aW9uIGxvZ2ljCgogIC8vIFVzZSBhYm92ZSBhcmd1bWVudHMgdG8gZGV0ZXJtaW5lIGlmIHdlIHdhbnQgdG8gYWJvcnQgaGFuZHNoYWtlCiAgLy8gRXhhbXBsZXM6CiAgLy8gLSBBYm9ydCBpZiBvcmRlciA9PSBVTk9SREVSRUQsCiAgLy8gLSBBYm9ydCBpZiB2ZXJzaW9uIGlzIHVuc3VwcG9ydGVkCiAgaWYgZXJyIDo9IGNoZWNrQXJndW1lbnRzKGFyZ3MpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogIH0KCiAgICAvLyBPcGVuSW5pdCBtdXN0IGNsYWltIHRoZSBjaGFubmVsQ2FwYWJpbGl0eSB0aGF0IElCQyBwYXNzZXMgaW50byB0aGUgY2FsbGJhY2sKICBpZiBlcnIgOj0gaW0ua2VlcGVyLkNsYWltQ2FwYWJpbGl0eShjdHgsIGNoYW5DYXAsIGhvc3QuQ2hhbm5lbENhcGFiaWxpdHlQYXRoKHBvcnRJRCwgY2hhbm5lbElEKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgfQoKICByZXR1cm4gdmVyc2lvbiwgbmlsCn0KCi8vIENhbGxlZCBieSBJQkMgSGFuZGxlciBvbiBNc2dPcGVuVHJ5CmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuT3BlblRyeSgKICBjdHggc2RrLkNvbnRleHQsCiAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAogIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogIGNvdW50ZXJwYXJ0eSBjaGFubmVsdHlwZXMuQ291bnRlcnBhcnR5LAogIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIChzdHJpbmcsIGVycm9yKSB7CiAgLy8gLi4uIGRvIGN1c3RvbSBpbml0aWFsaXphdGlvbiBsb2dpYwoKICAvLyBVc2UgYWJvdmUgYXJndW1lbnRzIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIGFib3J0IGhhbmRzaGFrZQogIGlmIGVyciA6PSBjaGVja0FyZ3VtZW50cyhhcmdzKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBlcnIKICB9CgogIC8vIE9wZW5UcnkgbXVzdCBjbGFpbSB0aGUgY2hhbm5lbENhcGFiaWxpdHkgdGhhdCBJQkMgcGFzc2VzIGludG8gdGhlIGNhbGxiYWNrCiAgaWYgZXJyIDo9IGltLmtlZXBlci5zY29wZWRLZWVwZXIuQ2xhaW1DYXBhYmlsaXR5KGN0eCwgY2hhbkNhcCwgaG9zdC5DaGFubmVsQ2FwYWJpbGl0eVBhdGgocG9ydElELCBjaGFubmVsSUQpKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCiAgfQoKICAvLyBDb25zdHJ1Y3QgYXBwbGljYXRpb24gdmVyc2lvbgogIC8vIElCQyBhcHBsaWNhdGlvbnMgbXVzdCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGFwcGxpY2F0aW9uIHZlcnNpb24KICAvLyBUaGlzIGNhbiBiZSBhIHNpbXBsZSBzdHJpbmcgb3IgaXQgY2FuIGJlIGEgY29tcGxleCB2ZXJzaW9uIGNvbnN0cnVjdGVkCiAgLy8gZnJvbSB0aGUgY291bnRlcnBhcnR5VmVyc2lvbiBhbmQgb3RoZXIgYXJndW1lbnRzLgogIC8vIFRoZSB2ZXJzaW9uIHJldHVybmVkIHdpbGwgYmUgdGhlIGNoYW5uZWwgdmVyc2lvbiB1c2VkIGZvciBib3RoIGNoYW5uZWwgZW5kcy4KICBhcHBWZXJzaW9uIDo9IG5lZ290aWF0ZUFwcFZlcnNpb24oY291bnRlcnBhcnR5VmVyc2lvbiwgYXJncykKCiAgcmV0dXJuIGFwcFZlcnNpb24sIG5pbAp9CgovLyBDYWxsZWQgYnkgSUJDIEhhbmRsZXIgb24gTXNnT3BlbkFjawpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5BY2soCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAogIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIGVycm9yIHsKICBpZiBjb3VudGVycGFydHlWZXJzaW9uICE9IHR5cGVzLlZlcnNpb24gewogICAgcmV0dXJuIHNka2Vycm9ycy5XcmFwZih0eXBlcy5FcnJJbnZhbGlkVmVyc2lvbiwgJnF1b3Q7aW52YWxpZCBjb3VudGVycGFydHkgdmVyc2lvbjogJXMsIGV4cGVjdGVkICVzJnF1b3Q7LCBjb3VudGVycGFydHlWZXJzaW9uLCB0eXBlcy5WZXJzaW9uKQogIH0KCiAgLy8gZG8gY3VzdG9tIGxvZ2ljCgogIHJldHVybiBuaWwKfQoKLy8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ09wZW5Db25maXJtCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuT3BlbkNvbmZpcm0oCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAvLyBkbyBjdXN0b20gbG9naWMKCiAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),a("p",[e._v("The channel closing handshake will also invoke module callbacks that can return errors to abort the closing handshake. Closing a channel is a 2-step handshake, the initiating chain calls "),a("code",[e._v("ChanCloseInit")]),e._v(" and the finalizing chain calls "),a("code",[e._v("ChanCloseConfirm")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ0Nsb3NlSW5pdApmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbkNsb3NlSW5pdCgKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogIC8vIC4uLiBkbyBjdXN0b20gZmluYWxpemF0aW9uIGxvZ2ljCgogIC8vIFVzZSBhYm92ZSBhcmd1bWVudHMgdG8gZGV0ZXJtaW5lIGlmIHdlIHdhbnQgdG8gYWJvcnQgaGFuZHNoYWtlCiAgZXJyIDo9IGNoZWNrQXJndW1lbnRzKGFyZ3MpCiAgcmV0dXJuIGVycgp9CgovLyBDYWxsZWQgYnkgSUJDIEhhbmRsZXIgb24gTXNnQ2xvc2VDb25maXJtCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuQ2xvc2VDb25maXJtKAogIGN0eCBzZGsuQ29udGV4dCwKICBwb3J0SUQsCiAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgLy8gLi4uIGRvIGN1c3RvbSBmaW5hbGl6YXRpb24gbG9naWMKCiAgLy8gVXNlIGFib3ZlIGFyZ3VtZW50cyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBhYm9ydCBoYW5kc2hha2UKICBlcnIgOj0gY2hlY2tBcmd1bWVudHMoYXJncykKICByZXR1cm4gZXJyCn0K"}}),e._v(" "),a("h3",{attrs:{id:"channel-handshake-version-negotiation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-handshake-version-negotiation"}},[e._v("#")]),e._v(" Channel handshake version negotiation")]),e._v(" "),a("p",[e._v("Application modules are expected to verify versioning used during the channel handshake procedure.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("OnChanOpenInit")]),e._v(" will verify that the relayer-chosen parameters\nare valid and perform any custom "),a("code",[e._v("INIT")]),e._v(" logic.\nIt may return an error if the chosen parameters are invalid\nin which case the handshake is aborted.\nIf the provided version string is non-empty, "),a("code",[e._v("OnChanOpenInit")]),e._v(" should return\nthe version string if valid or an error if the provided version is invalid.\n"),a("strong",[e._v("If the version string is empty, "),a("code",[e._v("OnChanOpenInit")]),e._v(" is expected to\nreturn a default version string representing the version(s)\nit supports.")]),e._v("\nIf there is no default version string for the application,\nit should return an error if the provided version is an empty string.")]),e._v(" "),a("li",[a("code",[e._v("OnChanOpenTry")]),e._v(" will verify the relayer-chosen parameters along with the\ncounterparty-chosen version string and perform custom "),a("code",[e._v("TRY")]),e._v(" logic.\nIf the relayer-chosen parameters\nare invalid, the callback must return an error to abort the handshake.\nIf the counterparty-chosen version is not compatible with this module's\nsupported versions, the callback must return an error to abort the handshake.\nIf the versions are compatible, the try callback must select the final version\nstring and return it to core IBC.\n"),a("code",[e._v("OnChanOpenTry")]),e._v(" may also perform custom initialization logic.")]),e._v(" "),a("li",[a("code",[e._v("OnChanOpenAck")]),e._v(" will error if the counterparty selected version string\nis invalid and abort the handshake. It may also perform custom ACK logic.")])]),e._v(" "),a("p",[e._v("Versions must be strings but can implement any versioning structure. If your application plans to\nhave linear releases then semantic versioning is recommended. If your application plans to release\nvarious features in between major releases then it is advised to use the same versioning scheme\nas IBC. This versioning scheme specifies a version identifier and compatible feature set with\nthat identifier. Valid version selection includes selecting a compatible version identifier with\na subset of features supported by your application for that version. The struct used for this\nscheme can be found in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection/types/version.go#L16",target:"_blank",rel:"noopener noreferrer"}},[e._v("03-connection/types"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Since the version type is a string, applications have the ability to do simple version verification\nvia string matching or they can use the already impelemented versioning system and pass the proto\nencoded version into each handhshake call as necessary.")]),e._v(" "),a("p",[e._v("ICS20 currently implements basic string matching with a single supported version.")]),e._v(" "),a("h2",{attrs:{id:"packet-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-callbacks"}},[e._v("#")]),e._v(" Packet callbacks")]),e._v(" "),a("p",[e._v("Just as IBC expects modules to implement callbacks for channel handshakes, it also expects modules to implement callbacks for handling the packet flow through a channel, as defined in the "),a("code",[e._v("IBCModule")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("Once a module A and module B are connected to each other, relayers can start relaying packets and acknowledgements back and forth on the channel.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://ibcprotocol.dev/_nuxt/img/packet_flow.1d89ee0.png",alt:"IBC packet flow diagram"}})]),e._v(" "),a("p",[e._v("Briefly, a successful packet flow works as follows:")]),e._v(" "),a("ol",[a("li",[e._v("module A sends a packet through the IBC module")]),e._v(" "),a("li",[e._v("the packet is received by module B")]),e._v(" "),a("li",[e._v("if module B writes an acknowledgement of the packet then module A will process the\nacknowledgement")]),e._v(" "),a("li",[e._v("if the packet is not successfully received before the timeout, then module A processes the\npacket's timeout.")])]),e._v(" "),a("h3",{attrs:{id:"sending-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-packets"}},[e._v("#")]),e._v(" Sending packets")]),e._v(" "),a("p",[e._v("Modules "),a("strong",[e._v("do not send packets through callbacks")]),e._v(", since the modules initiate the action of sending packets to the IBC module, as opposed to other parts of the packet flow where messages sent to the IBC\nmodule must trigger execution on the port-bound module through the use of callbacks. Thus, to send a packet a module simply needs to call "),a("code",[e._v("SendPacket")]),e._v(" on the "),a("code",[e._v("IBCChannelKeeper")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that some of the code below is "),a("em",[e._v("pseudo code")]),e._v(", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the "),a("code",[e._v("EncodePacketData(customPacketData)")]),e._v(" function.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcmV0cmlldmUgdGhlIGR5bmFtaWMgY2FwYWJpbGl0eSBmb3IgdGhpcyBjaGFubmVsCmNoYW5uZWxDYXAgOj0gc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBjaGFubmVsQ2FwTmFtZSkKLy8gU2VuZGluZyBjdXN0b20gYXBwbGljYXRpb24gcGFja2V0IGRhdGEKZGF0YSA6PSBFbmNvZGVQYWNrZXREYXRhKGN1c3RvbVBhY2tldERhdGEpCi8vIFNlbmQgcGFja2V0IHRvIElCQywgYXV0aGVudGljYXRpbmcgd2l0aCBjaGFubmVsQ2FwCnNlcXVlbmNlLCBlcnIgOj0gSUJDQ2hhbm5lbEtlZXBlci5TZW5kUGFja2V0KAogIGN0eCwgCiAgY2hhbm5lbENhcCwgCiAgc291cmNlUG9ydCwgCiAgc291cmNlQ2hhbm5lbCwgCiAgdGltZW91dEhlaWdodCwgCiAgdGltZW91dFRpbWVzdGFtcCwgCiAgZGF0YSwKKQo="}}),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("In order to prevent modules from sending packets on channels they do not own, IBC expects\nmodules to pass in the correct channel capability for the packet's source channel.")])]),e._v(" "),a("h3",{attrs:{id:"receiving-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-packets"}},[e._v("#")]),e._v(" Receiving packets")]),e._v(" "),a("p",[e._v("To handle receiving packets, the module must implement the "),a("code",[e._v("OnRecvPacket")]),e._v(" callback. This gets\ninvoked by the IBC module after the packet has been proved valid and correctly processed by the IBC\nkeepers. Thus, the "),a("code",[e._v("OnRecvPacket")]),e._v(" callback only needs to worry about making the appropriate state\nchanges given the packet data without worrying about whether the packet is valid or not.")]),e._v(" "),a("p",[e._v("Modules may return to the IBC handler an acknowledgement which implements the "),a("code",[e._v("Acknowledgement")]),e._v(" interface.\nThe IBC handler will then commit this acknowledgement of the packet so that a relayer may relay the\nacknowledgement back to the sender module.")]),e._v(" "),a("p",[e._v("The state changes that occurred during this callback will only be written if:")]),e._v(" "),a("ul",[a("li",[e._v("the acknowledgement was successful as indicated by the "),a("code",[e._v("Success()")]),e._v(" function of the acknowledgement")]),e._v(" "),a("li",[e._v("if the acknowledgement returned is nil indicating that an asynchronous process is occurring")])]),e._v(" "),a("p",[e._v("NOTE: Applications which process asynchronous acknowledgements must handle reverting state changes\nwhen appropriate. Any state changes that occurred during the "),a("code",[e._v("OnRecvPacket")]),e._v(" callback will be written\nfor asynchronous acknowledgements.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that some of the code below is "),a("em",[e._v("pseudo code")]),e._v(", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the "),a("code",[e._v("DecodePacketData(packet.Data)")]),e._v(" function.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTW9kdWxlKSBPblJlY3ZQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAopIGliY2V4cG9ydGVkLkFja25vd2xlZGdlbWVudCB7CiAgLy8gRGVjb2RlIHRoZSBwYWNrZXQgZGF0YQogIHBhY2tldERhdGEgOj0gRGVjb2RlUGFja2V0RGF0YShwYWNrZXQuRGF0YSkKCiAgLy8gZG8gYXBwbGljYXRpb24gc3RhdGUgY2hhbmdlcyBiYXNlZCBvbiBwYWNrZXQgZGF0YSBhbmQgcmV0dXJuIHRoZSBhY2tub3dsZWRnZW1lbnQKICAvLyBOT1RFOiBUaGUgYWNrbm93bGVkZ2VtZW50IHdpbGwgaW5kaWNhdGUgdG8gdGhlIElCQyBoYW5kbGVyIGlmIHRoZSBhcHBsaWNhdGlvbgogIC8vIHN0YXRlIGNoYW5nZXMgc2hvdWxkIGJlIHdyaXR0ZW4gdmlhIHRoZSBgU3VjY2VzcygpYCBmdW5jdGlvbi4gQXBwbGljYXRpb24gc3RhdGUKICAvLyBjaGFuZ2VzIGFyZSBvbmx5IHdyaXR0ZW4gaWYgdGhlIGFja25vd2xlZGdlbWVudCBpcyBzdWNjZXNzZnVsIG9yIHRoZSBhY2tub3dsZWRnZW1lbnQKICAvLyByZXR1cm5lZCBpcyBuaWwgaW5kaWNhdGluZyB0aGF0IGFuIGFzeW5jaHJvbm91cyBhY2tub3dsZWRnZW1lbnQgd2lsbCBvY2N1ci4KICBhY2sgOj0gcHJvY2Vzc1BhY2tldChjdHgsIHBhY2tldCwgcGFja2V0RGF0YSkKCiAgcmV0dXJuIGFjawp9Cg=="}}),e._v(" "),a("p",[e._v("Reminder, the "),a("code",[e._v("Acknowledgement")]),e._v(" interface:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNrbm93bGVkZ2VtZW50IGRlZmluZXMgdGhlIGludGVyZmFjZSB1c2VkIHRvIHJldHVybgovLyBhY2tub3dsZWRnZW1lbnRzIGluIHRoZSBPblJlY3ZQYWNrZXQgY2FsbGJhY2suCnR5cGUgQWNrbm93bGVkZ2VtZW50IGludGVyZmFjZSB7CiAgU3VjY2VzcygpIGJvb2wKICBBY2tub3dsZWRnZW1lbnQoKSBbXWJ5dGUKfQo="}}),e._v(" "),a("h3",{attrs:{id:"acknowledging-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledging-packets"}},[e._v("#")]),e._v(" Acknowledging packets")]),e._v(" "),a("p",[e._v("After a module writes an acknowledgement, a relayer can relay back the acknowledgement to the sender module. The sender module can\nthen process the acknowledgement using the "),a("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback. The contents of the\nacknowledgement is entirely up to the modules on the channel (just like the packet data); however, it\nmay often contain information on whether the packet was successfully processed along\nwith some additional data that could be useful for remediation if the packet processing failed.")]),e._v(" "),a("p",[e._v("Since the modules are responsible for agreeing on an encoding/decoding standard for packet data and\nacknowledgements, IBC will pass in the acknowledgements as "),a("code",[e._v("[]byte")]),e._v(" to this callback. The callback\nis responsible for decoding the acknowledgement and processing it.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that some of the code below is "),a("em",[e._v("pseudo code")]),e._v(", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the "),a("code",[e._v("DecodeAcknowledgement(acknowledgments)")]),e._v(" and "),a("code",[e._v("processAck(ack)")]),e._v(" functions.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTW9kdWxlKSBPbkFja25vd2xlZGdlbWVudFBhY2tldCgKICBjdHggc2RrLkNvbnRleHQsCiAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgYWNrbm93bGVkZ2VtZW50IFtdYnl0ZSwKKSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CiAgLy8gRGVjb2RlIGFja25vd2xlZGdlbWVudAogIGFjayA6PSBEZWNvZGVBY2tub3dsZWRnZW1lbnQoYWNrbm93bGVkZ2VtZW50KQoKICAvLyBwcm9jZXNzIGFjawogIHJlcywgZXJyIDo9IHByb2Nlc3NBY2soYWNrKQogIHJldHVybiByZXMsIGVycgp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"timeout-packets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeout-packets"}},[e._v("#")]),e._v(" Timeout packets")]),e._v(" "),a("p",[e._v("If the timeout for a packet is reached before the packet is successfully received or the\ncounterparty channel end is closed before the packet is successfully received, then the receiving\nchain can no longer process it. Thus, the sending chain must process the timeout using\n"),a("code",[e._v("OnTimeoutPacket")]),e._v(" to handle this situation. Again the IBC module will verify that the timeout is\nindeed valid, so our module only needs to implement the state machine logic for what to do once a\ntimeout is reached and the packet can no longer be received.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTW9kdWxlKSBPblRpbWVvdXRQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAopICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAvLyBkbyBjdXN0b20gdGltZW91dCBsb2dpYwp9Cg=="}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);