var lookupldap = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("lookupldap-strings");
  },

  debugMessage: function (txt) {
    // if (this.console_debug == true) {
      Application.console.log ('[Lookup LDAP] ' + txt);
    // }
  },

  onMsgHdrEmailCommand: function(popupNode) {
    //
    // MMA: Is this correct? Isn't there a better way to do this?
    //      If not, at least do some null checks on Nodes below.
    //

    //
    // Get emailAddressNode from popupNode. popupNode points to
    // the label, we want the actual email address node.
    //
    var emailAddressNode = popupNode.parentNode.parentNode;

    if (emailAddressNode) {
      var emailAddress = emailAddressNode.getAttribute("emailAddress");
      var displayName = emailAddressNode.getAttribute("displayName");

      dump (emailAddressNode);

      this.debugMessage ("Looking up " + emailAddress +
                          " [" + displayName + "]");
    } else {
      this.debugMessage ("Email Address Node seems to be null!");
    }
  }
};

window.addEventListener("load", function(e) { lookupldap.onLoad(e) }, false);
