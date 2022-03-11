// import { nextTick } from "vue";
import { mount } from '@vue/test-utils'
import TimelineView from '@/components/TimelineView.vue'
import { today, thisWeek, thisMonth } from '@/mocks'

describe('TimelineView', () => {
  it('Renders todays post by default', () => {
    const wrapper = mount(TimelineView)

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
  })

  it('Updates when the This Week period is clicked', async () => {
    const wrapper = mount(TimelineView)

    // wait for the next frame
    // await nextTick()
    // trigger automatically returns nextTick, so we can await directly here
    await wrapper.get('[data-test="This Week"]').trigger('click')

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'))
  })

  // you can use it.only to focus on one test at a time
  it('Updates when the This Month period is clicked', async () => {
    const wrapper = mount(TimelineView)

    // wait for the next frame
    // await nextTick()
    // trigger automatically returns nextTick, so we can await directly here
    await wrapper.get('[data-test="This Month"]').trigger('click')

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisMonth.created.format('Do MMM'))
  })
})