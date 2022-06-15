var viewPorts = require('../fixtures/breakpoints.json')

describe('Integration Test For Infinite React Leaf Carousel', function () {

    beforeEach('Go To App', ()=>{
        cy.visit('/')
    })

    context('Lazy Load Function',()=>{

        it('Lazy Load Function Test With Dots', function () {
            cy.viewport(viewPorts.mediumSizeWidth,viewPorts.height)
            cy.get('[alt="Image11"]').should('not.exist')
            cy.get('[alt="Image10"]').should('not.exist')

            cy.get('[class="InfiniteCarouselDot"]:nth-of-type(6)').click()

            cy.get('[alt="Image11"]').should('be.visible')
            cy.get('[alt="Image10"]').should('be.visible')

        });

        it('Lazy Load Function Test With AutoCycle', function () {

            cy.get('[alt="Image11"]').should('not.exist')
            cy.get('[alt="Image10"]').should('not.exist')

            //waiting for autocycle
            cy.wait(10000)

            cy.get('[alt="Image11"]').should('be.visible')
            cy.get('[alt="Image10"]').should('be.visible')

        });

        it('Lazy Load Function Test With Arrows', function () {

            cy.get('[alt="Image11"]').should('not.exist')
            cy.get('[alt="Image10"]').should('not.exist')

            //go to previous page
            cy.get('[name="infinite-carousel-button-previous"]').click()

            cy.get('[alt="Image11"]').should('be.visible')
            cy.get('[alt="Image10"]').should('be.visible')

        });
    })

    context('Visibilities Of Images Depends On BreakPoints',()=>{

        it('Visibilities Of 3 Images Side Images Depends On Breakpoint 199*500 Size', function () {
            cy.viewport(viewPorts.smallSizeWidth,viewPorts.height)

            cy.get('[alt="Image12"]').should('be.visible')
            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
            cy.get('[alt="Image3"]').should('not.be.visible')
        });

        it('Visibilities Of 4 Images With Side Images Depends On Breakpoint 499*500 Size', function () {
            cy.viewport(viewPorts.mediumSizeWidth,viewPorts.height)

            cy.get('[alt="Image12"]').should('be.visible')
            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
            cy.get('[alt="Image3"]').should('be.visible')
            cy.get('[alt="Image4"]').should('not.be.visible')
        });

        it('Visibilities Of 5 Images Side Images Depends On Breakpoint 699*500 Size', function () {
            cy.viewport(viewPorts.largeSizeWidth,viewPorts.height)
            
            cy.get('[alt="Image12"]').should('be.visible')
            cy.get('[alt="Image1"]').should('be.visible')
            cy.get('[alt="Image2"]').should('be.visible')
            cy.get('[alt="Image3"]').should('be.visible')
            cy.get('[alt="Image4"]').should('be.visible')
            cy.get('[alt="Image5"]').should('not.be.visible')

        });
    })

    context('Dots And Arrow Functions Testing',()=>{

        it('Number of Dots Depends On Breakpoint 199', function () {
            cy.viewport(viewPorts.smallSizeWidth,viewPorts.height)
            cy.get('[class="InfiniteCarouselDot"]').should('have.length',12)

        });

        it('Number of Dots Depends On Breakpoints 499', function () {
            cy.viewport(viewPorts.mediumSizeWidth,viewPorts.height)
            cy.get('[class="InfiniteCarouselDot"]').should('have.length',6)

        });
        it('Number of Dots Depends On Breakpoints 699', function () {
            cy.viewport(viewPorts.largeSizeWidth,viewPorts.height)
            cy.get('[class="InfiniteCarouselDot"]').should('have.length',4)

        });

        it('Clickable Function Of Dots', function () {
            cy.viewport(viewPorts.smallSizeWidth,viewPorts.height)

            cy.get('[alt="Image3"]').should('not.be.visible')

            cy.get('[class="InfiniteCarouselDot"]:nth-of-type(2)').click()

            cy.get('[alt="Image3"]').should('be.visible')

            cy.wait(1000)

            cy.get('[class="InfiniteCarouselDot"]:nth-of-type(1)').click()

            cy.get('[alt="Image3"]').should('not.be.visible')
        });

        it('Verify Arrows Are Displayed', function () {
            cy.viewport(viewPorts.mediumSizeWidth,viewPorts.height)

            cy.get('[name="infinite-carousel-button-next"]').should('be.visible')

            cy.get('[name="infinite-carousel-button-previous"]').should('be.visible')
        });

        it('Verify Arrows Are Clickable And They Changes The Images', function () {
            cy.viewport(viewPorts.mediumSizeWidth,viewPorts.height)

            cy.get('[alt="Image12"]').should('be.visible')
            cy.get('[alt="Image4"]').should('not.be.visible')

            cy.get('[name="infinite-carousel-button-next"]').click()

            cy.get('[alt="Image12"]').should('not.be.visible')
            cy.get('[alt="Image4"]').should('be.visible')


            cy.wait(1000)

            cy.get('[name="infinite-carousel-button-previous"]').click()

            cy.get('[alt="Image12"]').should('be.visible')
            cy.get('[alt="Image4"]').should('not.be.visible')
        });

    })

});