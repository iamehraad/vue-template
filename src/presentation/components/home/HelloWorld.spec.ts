import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../home/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { message: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
