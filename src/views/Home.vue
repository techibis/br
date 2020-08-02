<template>
  <div>
    <Form />
    <Business />
    <Map />
    <KeyFactors />
    <List />
    <Badge />
    <Video />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import Business from "../components/Business.vue";
import Map from "../components/Map.vue";
import KeyFactors from "../components/KeyFactors.vue";
import List from "../components/List.vue";
import Badge from "../components/Badge.vue";
import Video from "../components/Video.vue";

export default {
  name: "Home",
  components: {
    Form,
    Business,
    Map,
    KeyFactors,
    List,
    Badge,
    Video,
  },
};
</script>


