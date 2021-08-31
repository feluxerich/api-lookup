<script>
	var name = '';
	var data;
	var sendRequest = async () => {
		var response = await fetch(`/api/v1/minecraft/uuid?name=${name}`);
		try {
			data = await response.json();
		} catch (err) {
			data = { id: 'Not found' };
		}
	};
</script>

<div class="container ml-auto mr-auto flex flex-col justify-center items-center mt-40">
	<div class="flex items-center border-b-2 border-green-500 py-2 w-full max-w-sm">
		<input
			class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
			type="text"
			placeholder="Username"
			aria-label="Username"
			bind:value={name}
		/>
		<button
			class="flex-shrink-0 bg-transparent hover:bg-green-600 border-green-500 hover:border-green-600 text-sm border-2 text-green-600 hover:text-white py-1 px-2 rounded"
			type="submit"
			on:click={sendRequest}
		>
			Lookup
		</button>
	</div>
	{#if data}
		<div class="pt-6 font-bold text-white">
			<p>UUID: {data.id}</p>
		</div>
	{/if}
</div>
