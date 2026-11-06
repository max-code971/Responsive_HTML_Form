const prefSelect = document.getElementById('preferences');
    const detailsGroup = document.getElementById('preferences-details-group');

    prefSelect.addEventListener('change', function() {
      if (this.value === 'yes') {
        detailsGroup.style.display = 'flex';
      } else {
        detailsGroup.style.display = 'none';
      }
    });

    document.getElementById('req-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form successfully submitted!');
      window.location.href = 'index.html';
    });