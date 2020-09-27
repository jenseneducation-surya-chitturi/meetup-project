import Event from "@/components/Event.vue";
import { shallowMount , mount } from "@vue/test-utils";

describe('Event details page', () => {
    it('should show id from the URL', () => {
        const $route = { path: '/signup' }
        let wrapper = shallowMount(Event, {
            mocks: {
                $route
              }
        });

        expect(wrapper.vm.$route.path).toBe($route.path)

        
    })

})
