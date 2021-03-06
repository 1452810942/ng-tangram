
## 代码演示

<div class="grid-x grid-margin-x">
   <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-single></example-select-single>
      </nt-example-showcase>
      <nt-example-legend title="单选">
      单选下拉菜单，通过设置
      </nt-example-legend>
      <nt-example-code [code]="singleCode"></nt-example-code>
    </nt-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-multiple></example-select-multiple>
      </nt-example-showcase>
      <nt-example-legend title="单选">多选下拉菜单。</nt-example-legend>
      <nt-example-code [code]="multipleCode"></nt-example-code>
    </nt-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-disabled></example-select-disabled>
      </nt-example-showcase>
      <nt-example-legend title="单选">设置禁用下拉菜单</nt-example-legend>
      <nt-example-code [code]="disabledCode"></nt-example-code>
    </nt-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-required></example-select-required>
      </nt-example-showcase>
      <nt-example-legend title="单选">设置必填下拉菜单</nt-example-legend>
      <nt-example-code [code]="requiredCode"></nt-example-code>
    </nt-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-compare-with></example-select-compare-with>
      </nt-example-showcase>
      <nt-example-legend title="compareWith">
        当所选取的值也是一个对象，可使用compareWith 来设置匹配方法.
      </nt-example-legend>
      <nt-example-code [code]="compareWithCode"></nt-example-code>
    </nt-example>
  </div>
   <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-filter></example-select-filter>
      </nt-example-showcase>
      <nt-example-legend title="filter">设置可筛选的下拉框</nt-example-legend>
      <nt-example-code [code]="filterCode"></nt-example-code>
    </nt-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-placeholder></example-select-placeholder>
      </nt-example-showcase>
      <nt-example-legend title="placeholder">自定义placeholder</nt-example-legend>
      <nt-example-code [code]="placeholderCode"></nt-example-code>
    </nt-example>
  </div>
   <div class="medium-6 large-6 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-event></example-select-event>
      </nt-example-showcase>
      <nt-example-legend title="单选">相关事件监听使用</nt-example-legend>
      <nt-example-code [code]="eventCode"></nt-example-code>
    </nt-example>
  </div>
   <div class="medium-12 large-12 cell">
    <nt-example>
      <nt-example-showcase>
        <example-select-coordinat></example-select-coordinat>
      </nt-example-showcase>
      <nt-example-legend title="联动">下拉联动选择</nt-example-legend>
      <nt-example-code [code]="coordinatCode"></nt-example-code>
    </nt-example>
  </div>
</div>

<div>
  <nt-markdown [data]="api"></nt-markdown>
</div>
