<template>
  <a-descriptions :column="1" bordered>
    <a-descriptions-item label="Node.js">
      {{ versions['node'] }}
    </a-descriptions-item>
    <a-descriptions-item label="Chromium">
      {{ versions['chrome'] }}
    </a-descriptions-item>
    <a-descriptions-item label="Electron">
      {{ versions['electron'] }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
const { getVersions } = window.srv;

export default {
  data() {    
    return {
      versions: getVersions(),
    };
  },
}
</script>
