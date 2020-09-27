import { shallowMount } from '@vue/test-utils'
import Meetup from '@/views/Meetup.vue'

describe('Meetup.vue', () => {
    let wrapper, data;
    beforeEach(() => {
        data = [
            {"title": "Night in the City",  },
           { "title": "Batman Screening",},
           {"title": "Cycling in Almada",},
           {"title": "New Aquaman",},
           { "title": "Burger Festival",},
           {"title": "London Marathon", }]
        wrapper = shallowMount(Meetup, {
            data: () => ({
                events: data
            })
        });
    
    })

    it('should have empty string show all elements', () => {
        let elementCount = wrapper.findAll('ul > li').length;

        expect(elementCount).toBe(data.length)
    })
    it('should have "b" show "batman" and "burger" ', async () => {

        const input = wrapper.find('input')
        await input.setValue('b')
    
        let results = wrapper.findAll('.title').wrappers;
        let hasBatman = results.some(h1 => h1.text() === 'Batman Screening')
        let hasBurger = results.some(h1 => h1.text() === 'Burger Festival')
        expect(hasBatman&& hasBurger).toBe(true)
        expect(results.length).toBe(2)
      })
    
})

 



