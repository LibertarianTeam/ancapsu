<script>
import buildClass from 'build-css-class'

import Button from '~/components/Button'
import Loading from '~/components/Loading'

export default {
  name: 'Card',
  components: {
    'c-button': Button,
    'c-loading': Loading
  },
  props: {
    to: {
      type: [String, Object],
      default: () => ({ name: 'index' })
    },
    tags: {
      type: Array,
      default: () => []
    },
    img: {
      type: String,
      default: 'icons/broken.svg'
    },
    transparent: {
      type: Boolean,
      default: false
    },
    skeleton: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      return this.$attrs.title || ''
    },
    cardStyle() {
      const { img } = this.$props
      const url = img.includes('https') ? img : require('~/assets/' + img)

      return { backgroundImage: `url("${url}")` }
    },
    cardClass() {
      return buildClass('c-card', {
        compact: this.$props.compact,
        centered: this.$props.centered,
        transparent: this.$props.transparent
      })
    }
  }
}
</script>

<template lang="html">
  <c-loading v-if="$props.skeleton" :class="cardClass"></c-loading>

  <div v-else :style="cardStyle" :class="cardClass">
    <div class="content">
      <template v-if="$props.tags !== []">
        <c-button
          v-for="(tag, index) of $props.tags"
          :key="index"
          class="tag"
          :title="`Acessar a categoria ${tag.label}`"
          :to="tag.to"
          v-text="tag.label"
        ></c-button>
      </template>

      <c-button class="title" :title="title" :to="$props.to">
        <slot name="default"></slot>
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.c-card {
  display: flex;

  align-items: flex-end;
  justify-content: center;

  width: 260px;
  height: 360px;

  box-shadow: inset 0 0 18px 6px var(--sw-secondary);
  border-radius: 8px;

  overflow: hidden;
  transition: box-shadow 0.2s linear;

  background: var(--primary) no-repeat;
  background-size: cover;
}

.c-card:hover {
  box-shadow: inset 0 0 24px 4px var(--sw-tertiary);
}

.c-card.c-loading {
  position: relative;
  align-items: center;

  min-height: 260px;
}

.c-card.compact {
  height: 220px;
  overflow: hidden;
}

.c-card.centered {
  background-position: center;
}

.c-card .content {
  width: 100%;
}

.c-card .content .tag {
  margin: 4px;
  border-radius: 4px;

  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: bold;

  text-shadow: 2px 2px 2px var(--sw-secondary);
}

.c-card .content .title {
  width: 100%;
  padding: 8px 12px;

  border: none;
  transition: background-color 0.4s;

  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: bold;

  text-shadow: 2px 2px 8px var(--sw-tertiary);

  background-color: transparent;
}

.c-card:not(.transparent) .content .title {
  padding: 6px 8px;
  min-height: 100px;

  background-color: var(--sw-tertiary);
}

.c-card:not(.transparent):hover .content .title {
  background-color: var(--bg-tertiary);
}

.c-card:not(.transparent) .content .title:hover {
  background-color: var(--bg-secondary);
}

.c-card.compact .content .title {
  min-height: 82px;

  font-size: 1.2rem;
  line-height: 1.6rem;
}
</style>
