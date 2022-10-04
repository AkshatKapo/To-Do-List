


window.addEventListener('load', () => {

   
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	
	

    form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if(!task){

			alert("Please fill out the task ")
		}

        





		const task_el = document.createElement("div"); // this one is for add task CSS
		task_el.classList.add("task"); //Add task css properties to the list 

		const task_content_el = document.createElement("div"); //this one 
		task_content_el.classList.add("Contents" );

        const a1=document.createElement("input");
		const t1=document.createElement("input");
		const a2=document.createElement("input");
		const t2=document.createElement("input");
		


		

		const taskcheck= document.createElement("input");

       

		
		


	
		 
		

		task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
		task_input_el.classList.add('texxt');
		task_input_el.type = 'text';
		task_input_el.value =task;
		task_input_el.setAttribute('readonly', 'readonly');





        






		
		
         
	     

		task_content_el.appendChild(task_input_el);

        


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('Edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('Delete');
		task_delete_el.innerText = 'Delete';

		const task_check_el = document.createElement('input');
		task_check_el.setAttribute("type", "checkbox");
		task_check_el.classList.add('check');
		task_check_el.innerText = 'checkbox';




		
		const task_a1_el = document.createElement('label');
		task_a1_el.setAttribute("type", "text");
		task_a1_el.classList.add('L1');
		task_a1_el.innerText = 'Start Time: ';




		
		const task_t1_el = document.createElement('input');
		task_t1_el.setAttribute("type", "time");
		task_t1_el.classList.add('time1');
		task_t1_el.innerText = 'time';

		
		const task_a2_el = document.createElement('label');
		task_a2_el.setAttribute("type", "text");
		task_a2_el.classList.add('L1');
		task_a2_el.innerText = 'End Time: ';

		const task_t2_el = document.createElement('input');
		task_t2_el.setAttribute("type", "time");
		task_t2_el.classList.add('time2');
		task_t2_el.innerText = 'time';





        
		task_actions_el.appendChild(task_a1_el);
        task_actions_el.appendChild(task_t1_el);
		task_actions_el.appendChild(task_a2_el);
		task_actions_el.appendChild(task_t2_el);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_check_el);


		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

        
	  
    


		input.value = '';



		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		function myFunction() {
			
			if (checkBox.checked == true){
			  text.style.display = "block";
			} else {
			   text.style.display = "none";
			}
		  }



		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});



		








		
   });



});







    