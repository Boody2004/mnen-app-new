<template>
  <div :class="`input-container ${isFocused ? 'focus' : ''}`">
    <textarea
      v-if="type === 'textarea'"
      @focus="focus()"
      @blur="blur()"
      :name="name"
      v-model="text"
      class="input"
    />
    <input
      v-else
      @focus="focus()"
      @blur="blur()"
      :type="type"
      :name="name"
      v-model="text"
      class="input"
    />
    <label for="">{{ labelText }}</label>
    <span>{{ labelText }}</span>
  </div>
</template>

<script>
export default {
  props: ["labelText", "type", "name"],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      isFocused: false,
      text: "",
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    focus() {
      this.isFocused = true;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    blur() {
      if (this.text === "") {
        this.isFocused = false;
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  margin: 1rem 0;
}
.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: var(--light);
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: 0.3s;
}
textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 4px;
  resize: none;
  overflow-y: auto;
}
.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}
.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}
.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}
.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #344955;
  top: 50%;
  transform: translateY(-50%);
}
.input-container span:before {
  left: 50%;
}
.input-container span:after {
  right: 50%;
}
.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}
.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}
</style>
