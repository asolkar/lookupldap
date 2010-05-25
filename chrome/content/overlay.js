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

  onMsgHdrEmailCommand: function(emailAddressNode) {
    this.debugMessage ("Email Address Node: " + emailAddressNode);
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
