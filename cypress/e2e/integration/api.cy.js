describe('API Test', () => {
  //Scenerio 3
    it('GET /users', () => {
      cy.request('/api/users?page=2')
        .then((response) => {
          expect(response.status).to.eq(200) // Verify the response status code is 200
          expect(response.body.data).to.have.length(6) // Verify the response data contains 6 items
          expect(response.body.data[0]).to.have.property('first_name', 'Michael') // Verify the  item has a first name property with value 'Michael'
          expect(response.body.data[0]).to.have.property('last_name', 'Lawson')  // Verify the  item has a first name property with value 'Lawson'
        })
    })


    it('POST /login successful', () => {
      cy.request({
        method: 'POST',
        url: '/api/login',
        body: {
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        }
      }).then((response) => {
        expect(response.status).to.eq(200) // Verify the response status code is 200
        expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4') // Verify the response data contains the token property with value
         })
    })

    it('POST /login unsuccessful', () => {
      cy.request({
        method: 'POST',
        url: '/api/login',
        body: {
            "email": "peter@klaven"
        },
        failOnStatusCode: false // allow the test to pass even if the response status code is 400
    }).then((response) => {
      }).then((response) => {
        expect(response.status).to.eq(400) // Verify the response status code is 400
        expect(response.body).to.have.property('error', 'Missing password') // Verify the response data contains the error property with value
         })
    })

  })



    
  