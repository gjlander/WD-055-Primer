<h4>Objective:</h4>
<p>This exercise aims to familiarize you with different types of variable declarations in JavaScript (<code>var</code>, <code>let</code>, and <code>const</code>) and understand their scopes&mdash;global, function, and block. You'll explore how <code>var</code> behaves differently from <code>let</code> and <code>const</code>, especially in terms of redeclaration and scope leakage.</p>
<h4>Background:</h4>
<p>Variables in JavaScript can be declared using <code>var</code>, <code>let</code>, or <code>const</code>. Each has different implications for scope control and mutability:</p>
<ul>
<li><code>var</code> has function scope or global scope if declared outside any function. It can be re-declared and updated.</li>
<li><code>let</code> has block scope (like within an <code>if</code> block or loop), cannot be re-declared within the same scope, but can be updated.</li>
<li><code>const</code> also has block scope and cannot be re-declared or updated. It's perfect for declaring constants and for arrays or objects where contents might change but the reference does not.</li>
</ul>
<h4>Task:</h4>
<ol>
<li>
<p><strong>Global and Function Scope with <code>var</code></strong>:</p>
<ul>
<li>Declare a global variable using <code>var</code> and log it.</li>
<li>Inside a function, declare another <code>var</code> variable with the same name but different value and log it within the function.</li>
<li>Call your function.&nbsp;</li>
<li>Log your global variable. Did it change? No! This is function scope!</li>
</ul>
</li>
<li>
<p><strong>Block Scope with <code>let</code> and <code>const</code></strong>:</p>
<ul>
<li>Inside a block (use an <code>if</code> statement with a condition of <code>true</code>), declare variables using&nbsp;<code>let</code> and <code>const</code>. Try redeclaring them within the same block to observe errors.</li>
<li>Try to log them inside and outside the <code>if</code> statement. What happens?</li>
</ul>
</li>
<li>
<p><strong>Redeclaration with <code>var</code></strong>:</p>
<ul>
<li>Try to redeclare your original global variable with <code>var</code> within the <code>if</code> block, log it in and outside the statement. What happens?</li>
</ul>
</li>
<li>
<p><strong>Usage of <code>const</code> for Arrays and Objects</strong>:</p>
<ul>
<li>Declare an array and an object using <code>const</code>. Modify the contents of both and log their values before and after the changes.</li>
<li><code>const</code>is suggested for arrays and objects declaration since it's only the contents that change but not the reference!</li>
</ul>
</li>
</ol>
<h4>Discussion Points:</h4>
<ul>
<li>Discuss why <code>var</code> might lead to unexpected results when used in blocks.</li>
<li>Explain why <code>let</code> and <code>const</code> are generally safer to use for controlling scope.</li>
<li>Consider the mutability of arrays and objects declared with <code>const</code>.</li>
</ul>