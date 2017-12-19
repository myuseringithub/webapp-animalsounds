// This file would be required in Redbird reverseProxy. 
// USAGE: 

module.exports = function reverseProxy(proxy) {

    let email = process.env.EMAIL
    let domain = 'animalsounds.webapp.run'

    proxy.register(domain, 'http://animalsoundswebapp_nodejs:80', {
        ssl: {
            letsencrypt: {
                email: email, // Domain owner/admin email
                production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
            }
        }
    });
        
}