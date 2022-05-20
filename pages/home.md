---
layout: layouts/base.liquid
templateEngine: liquid, md
---

<ul>
{% for doc in home %}
  <li>
      {{ doc.title }}
  </li>
{% endfor %}
</ul>
