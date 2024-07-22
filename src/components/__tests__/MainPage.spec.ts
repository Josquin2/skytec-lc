import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import MainPage from '@/views/MainPage.vue'

function mountWithConfig() {
  return mount(MainPage, {
    props: {
      toWho: 'anybody'
    },
    global: {
      stubs: {
        RightBlock: {
          template: '<div />',
          props: ['toWho']
        }
      }
    }
  })
}

describe('MainPage', () => {
  it('is a Vue instance', () => {
    const wrapper = mountWithConfig()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mountWithConfig()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('onMounted is called on mount', async () => {
    const onMountedMock = vi.fn()

    const wrapper = mount(MainPage, {
      props: {
        toWho: 'anybody'
      },
      global: {
        mixins: [
          {
            mounted() {
              onMountedMock()
            }
          }
        ],
        stubs: {
          RightBlock: {
            template: '<div />',
            props: ['toWho']
          }
        }
      }
    })

    await wrapper.vm.$nextTick()
    expect(onMountedMock).toHaveBeenCalled()
  })
})
