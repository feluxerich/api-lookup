<script>
	var data;
	var name = '';

	var sendRequest = async () => {
		var response = await fetch(`/api/v1/minecraft/hypixel?name=${name}`);
		data = await response.json();
	};
</script>

<div class="container ml-auto mr-auto flex flex-col justify-center items-center mt-40">
	<div class="flex items-center border-b-2 border-gray-500 py-2 w-full max-w-sm">
		<input
			class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
			type="text"
			placeholder="Username"
			aria-label="Username"
			bind:value={name}
		/>
		<button
			class="flex-shrink-0 bg-transparent hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-sm border-2 text-gray-500 hover:text-white py-1 px-2 rounded"
			type="submit"
			on:click={sendRequest}
		>
			Lookup
		</button>
	</div>
	<!-- <div class="flex items-center border-b-2 border-green-500 py-2 w-full max-w-sm">
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
	</div> -->
	<div class="bg-gray-800 rounded-lg max-w-xl w-full h-64 p-7 flex flex-row mt-6">
		<div class="bg-gray-700 h-full rounded-lg mr-9" style="aspect-ratio: 1/1">
			<img
				class="h-full w-full rounded-lg"
				src={`https://mc-heads.net/avatar/${data?.data?.id}`}
				alt="profile-head"
			/>
		</div>
		<div class="w-full h-full flex flex-col text-white font-bold">
			<p class="text-2xl mb-4">{data?.data?.name}</p>
			<span class="text-sm flex items-center"
				>Status: <div
					class="h-3 w-3 rounded-full ml-2 {data?.data?.status === false
						? 'bg-red-500'
						: 'bg-green-500'}"
				/></span
			>
			<span class="text-sm"
				>Rank: <span class="font-normal">
					{data?.data?.rank
						? data.data.rank.replace('_', '').replace('PLUS', '+')
						: 'No Rank'}</span
				></span
			>
			<span class="text-sm"
				>Guild: <span class="font-normal">{data?.data?.guild ? data.data.guild : 'No Guild'}</span
				></span
			>
		</div>
	</div>
</div>
