<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: rgb(255, 0, 0);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--vt-c-indigo);
}

@media (min-width: 1024px) {
  .item {
    margin: 4% 0;
    padding: 1% 1%;
  }

  i {
    left: -30px;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 40px;
    height: 40px;
  }
}
</style>
