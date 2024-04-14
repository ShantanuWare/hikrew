// Function to format the date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short" };
  return date.toLocaleDateString("en-GB", options);
}

// Function to format duration
function formatDuration(duration) {
  const night = duration?.night;
  const day = duration?.day;

  // Construct formatted string
  let formattedDuration = "";
  if (night > 0) {
    formattedDuration += night + (night === 1 ? " Night" : " Nights");
  }
  if (day > 0) {
    formattedDuration +=
      (formattedDuration ? " " : "") + day + (day === 1 ? " Day" : " Days");
  }
  return formattedDuration.trim();
}

const renderRichText = (data) => {
  return data.map((item, index) => {
    if (item.type === "list") {
      const listItems = item.children.map((child, childIndex) => (
        <li key={childIndex}>{child.children[0].text}</li>
      ));
      return <ul key={index}>{listItems}</ul>;
    }
    return null;
  });
};

module.exports = { formatDate, formatDuration, renderRichText };
