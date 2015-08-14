---
layout: service
title: Build-a-Truck
permalink: /services/build-a-truck/
hero: /images/FPO.jpg
heroalt: 
---
<form name="frm" onsubmit="return false;"> 
	<label class="form-block">
		Class/Length
		<select id="classLength" name="classLength" class="selectbox">
			<option  selected="selected" disabled="disabled">--select one--</option>
			<option>1/100</option>
			<option>1/30</option>
			<option>1/35</option>
			<option>1/40</option>
			<option>1/45</option>
			<option>1/50</option>
			<option>1/55</option>
			<option>1/60</option>
			<option>1/65</option>
			<option>1/70</option>
			<option>1/75</option>
			<option>1/80</option>
			<option>1/85</option>
			<option>1/90</option>
			<option>1/95</option>
			<option>2/100</option>
			<option>2/30</option>
			<option>2/35</option>
			<option>2/40</option>
			<option>2/45</option>
			<option>2/50</option>
			<option>2/55</option>
			<option>2/60</option>
			<option>2/65</option>
			<option>2/70</option>
			<option>2/75</option>
			<option>2/80</option>
			<option>2/85</option>
			<option>2/90</option>
			<option>2/95</option>
			<option>3/25</option>
			<option>3/30</option>
			<option>3/35</option>
			<option>3/40</option>
			<option>3/45</option>
			<option>3/50</option>
			<option>3/55</option>
			<option>3/60</option>
			<option>3/65</option>
			<option>3/70</option>
			<option>3/75</option>
			<option>3/80</option>
			<option>3/85</option>
			<option>3/90</option>
			<option>4/25</option>
			<option>4/30</option>
			<option>4/35</option>
			<option>4/40</option>
			<option>4/45</option>
			<option>4/50</option>
			<option>4/55</option>
			<option>4/60</option>
			<option>4/65</option>
			<option>4/70</option>
			<option>5/25</option>
			<option>5/30</option>
			<option>5/35</option>
			<option>5/40</option>
			<option>5/45</option>
			<option>6/25</option>
			<option>6/30</option>
			<option>6/35</option>
			<option>6/40</option>
			<option>7/20</option>
			<option>7/25</option>
			<option>7/30</option>
			<option>7/35</option>
			<option>9/20</option>
			<option>9/25</option>
			<option>9/30</option>
		</select>
	</label>
	<label class="form-block">
		Quantity:
		<input type="number" name="quantity" step="1">
	</label>
	<button class="button" type="button" onclick="calc()">Calculate</button>
	<ul class="columns two-columns">
		<li>
			<h2>CCA</h2>
			<label class="form-block">
				Total Cubic Weight:
				<input type="text" readonly="1" name="cubic">
			</label>
			<label class="form-block">
				Total CCA Weight:
				<input type="text" readonly="1" name="CCA">
			</label>
			<label class="form-block">
				CCA Truck Loads:
				<input type="text" readonly="1" name="CCATruck">
			</label>
			Available on next truck <span id="cca_caption"></span>
		</li>
		<li>
			<h2>Penta/Creosote/CuNap</h2>
			<label class="form-block">
				Total Penta Weight:
				<input type="text" readonly="1" name="Penta">
			</label>
			<label class="form-block">
				Penta Truck Loads:
				<input type="text" readonly="1" name="PentaTruck">
			</label>
			Available on next truck <span id="penta_caption"></span>
		</li>
	</ul>
</form>
<!-- 
  <script> 
    var list_box = document.frm.classLength;

    newOption = new Option("--select one--");
    newIndex = list_box.length;
    list_box.options[newIndex] = newOption;

    for(i=1; i<pole_array.length; i++)
    {
       newOption = new Option(pole_array[i][0]);
       newIndex = list_box.length;
       list_box.options[newIndex] = newOption;
    }
  </script> -->