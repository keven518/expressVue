var express = require('express'),
  router = express.Router();
  var users = [];
  var pageTitle = 'Express Vue';
  users.push({ name: 'tobi', age: 12 });
  users.push({ name: 'loki', age: 14  });
  users.push({ name: 'jane', age: 16  });

  var exampleMixin = {
      methods: {
          hello: function () {
              console.log('Hello');
          }
      }
  }

module.exports = function (app) {
  app.use('/kk/', router);
};

router.get('/', function (req, res, next) {
    // res.render('index', {
    //   title: 'Generator-Express MVC',
    //   articles: articles
    // });
    // res.send('kv');
    var scope = {
          data: {
              title: pageTitle,
              message: 'Hello!',
              users: users
          },
          vue: {
              head: {
                  title: pageTitle,
                  meta: [
                      { property:'og:title', content: pageTitle},
                      { name:'twitter:title', content: pageTitle}
                  ],
                  structuredData: {
                      "@context": "http://schema.org",
                      "@type": "Organization",
                      "url": "http://www.your-company-site.com",
                      "contactPoint": [{
                          "@type": "ContactPoint",
                          "telephone": "+1-401-555-1212",
                          "contactType": "customer service"
                      }]
                  }
              },
              components: ['users', 'message'],
              mixins: [exampleMixin]
          }
      };
      res.render('index', scope);
});

router.get('/users/:userName', function(req, res){
      var user = req.params.userName;
      res.render('user', {
          data: {
              title: 'Hello My Name is',
              user: user
          }
      });
  });
