export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/vivek_jami_new.pdf';
  link.download = 'Vivek_Jami_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};